### 1.Set
集合`Set`是一种用于存储无重复元素的数据结构，在本节中主要介绍基于链表和基于二分搜索树实现的`Set`。      
集合中主要有五大方法，我们可以用一个接口来清晰的表示出来，下面分别来实现核心的`add()`，`remove()`，`contains()`

```ts
interface MySet<E> {
  add(e: E): void; // 添加元素
  remove(e: E): void; // 删除元素
  contains(e : E): boolean; // 看集合中是否包含某个元素
  getSize(): number; // 获取集合中元素的个数
  isEmpty(): boolean; // 判断集合是否为空
}
```

#### 1.1 基于二分搜索树实现的Set
有了之前二分搜索树的基础，实现这个Set非常容易，相关的方法只需要调用而分搜索树的方法即可

```ts
class BSTSet<E> implements MySet<E> {
  private bst: BST<E> = new BST<E>();

  // 向集合中添加元素
  public add(e: E): void {
    this.bst.add(e);
  }

  // 在集合中删除元素
  public remove(e: E): void {
    this.bst.remove(e);
  }

  // 判断集合中是否包含某个元素
  public contains(e: E): boolean {
    return this.bst.contains(e);
  }

  // 获取集合的大小
  public getSize(): number {
    return this.bst.getSize();
  }

  // 判断集合是否为空
  public isEmpty(): boolean {
    return this.bst.isEmpty();
  }
}
```

#### 1.2 基于链表实现的Set
同样的我们也只需要调用之前实现好的链表上的方法即可

```ts
class LinkedListSet<E> implements MySet<E> {
  private list: LinkedList<E> = new LinkedList<E>();

  // 向集合中添加元素
  public add(e: E): void {
    if (!this.contains(e)) {
      this.list.addFirst(e);
    }    
  }

  // 在集合中删除元素
  public remove(e: E): void {
    this.list.removeElement(e);
  }

  // 判断集合中是否包含某个元素
  public contains(e: E): boolean {
    return this.list.contains(e); 
  }

  // 获取集合的大小
  public getSize(): number {
    return this.list.getSize();
  }

  // 判断集合是否为空
  public isEmpty(): boolean {
    return this.list.isEmpty();
  }
}
```



### 2.Map
映射`Map`是一种用于存储键值对的数据结构，其中Map的键不可重复。同样的，在本节中主要介绍基于链表和基于二分搜索树实现的`Map`。集合中的主要方法也可以用接口来表示

```ts
interface MyMap<K, V> {
  add(key: K, value: V): void; // 向映射中添加一组键值对
  remove(key: K): V; // 在映射中移除一组键值对，并返回对应的value值
  contains(key: K): boolean; // 判断映射中是否包含某个键
  get(key: K): V; // 获取某个键对应的value
  set(key: K, newValue: V): void; // 更新某个键的值
  getSize(): number; // 获取Map的大小
  isEmpty(): boolean; // 判断Map是否为空
}
```

#### 2.1基于二分搜索树实现的映射
在这里我们没法直接用之前实现的BST，主要是因为之前的BST中每个节点我们只存储了一个元素，而对于Map而言我们需要存储两个元素。但整体思想并没有太大的变化，我们先来看这个映射节点的表示

```ts
class BSTMapNode<K, V> {
    public key: K;
    public value: V;
    public left: BSTMapNode<K, V> = null;
    public right: BSTMapNode<K, V> = null;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
```
我们可以看出相较于普通的BST，这里多出来了一个`value`，其实在这里我们可以把存储在BST上的元素看做这里的`key`。之后的添加，删除，遍历等操作我们都可以使用这个key来作为查找的根据       

添加元素依然是不断的递归，一直递归到某个节点为null，然后就返回新的节点。

> 这里需要注意的是，如果当前二分搜索树存在这个key值，那么我们需要更新这个节点的值

```ts
// 向以node为根的二分搜索树中插入元素(key, value)，递归算法
// 返回插入新节点后二分搜索树的根
private addNode(node: BSTMapNode<K, V>, key: K, value: V): BSTMapNode<K, V> {
    if (node === null) {
        this.size++;
        return new BSTMapNode<K, V>(key, value);
    }
    if (key < node.key) {
        node.left = this.addNode(node.left, key, value);
    } else if (key > node.key) {
        node.right = this.addNode(node.right, key, value);
    } else { // key === node.key
        node.value = value; // 覆盖之前的值
    }
    return node;
}
```

查询元素，同样也是不断的递归，如果当前的key比遍历到的这个节点小，则去该节点的左子树中查找；如果比这个元素大，那就去右子树中查找

```ts
// 获取以node为根节点的二分搜索树中，key所在的节点
private getNode(node: BSTMapNode<K, V>, key: K): BSTMapNode<K, V> {
    if (node === null) {
        return null;
    }
    if (key === node.key) {
        return node;
    } else if (key < node.key) {
        return this.getNode(node.left, key);
    } else {
        return this.getNode(node.right, key);
    }
}
```

删除元素，依然是最麻烦的一个环节，不过思想也是和之前的BST一致

```ts
// 删除掉以node为根的二分搜索树中键为key的节点，递归算法
// 返回删除节点后新的二分搜索树的根
private removeNode(node: BSTMapNode<K, V>, key: K): BSTMapNode<K, V> {
    if (node === null) {
        return null;
    }

    if (key < node.key) {
        node.left = this.removeNode(node.left, key);
        return node;
    } else if (key > node.key) {
        node.right = this.removeNode(node.right, key);
        return node;
    }

    if (node.left === null) {
        let rightNode: BSTMapNode<K, V> = node.right;
        node.right = null;
        this.size--;
        return rightNode;
    }

    if (node.right === null) {
        let leftNode: BSTMapNode<K, V> = node.left;
        node.left = null;
        this.size--;
        return leftNode;
    }

    let successor: BSTMapNode<K, V> = this.minimum(node.right);
    successor.right = this.removeMin(node.right);
    successor.left = node.left;
    node.left = null;
    node.right = null;
    return successor;
}
```

#### 2.2 基于链表实现的映射

先来看链表的节点，相较于普通的链表节点，这里也是添加了一个value。同样的针对遍历而言，我们依然会采用key来作为遍历比较的基准

```ts
class LinkedListNode<K, V> {
    public key: K;
    public value: V;
    public next: LinkedListNode<K, V>;
    constructor(key: K, value: V, next: LinkedListNode<K, V>) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
    public toString(): String {
        return `${this.key} : ${this.value}`;
    }
}
```

基于链表的映射和普通的链表实现基本相同，这里就不在赘述

```ts
class LinkedListMap<K, V> implements MyMap<K, V> {
    private dummyHead: LinkedListNode<K, V> = new LinkedListNode(null, null, null);
    private size: number = 0;

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    // 获取键为key的node
    private getNode(key: K): LinkedListNode<K, V> {
        let cur = this.dummyHead.next;
        while (cur.next !== null) {
            if (cur.key === key) {
                return cur;
            }
            cur = cur.next;
        }
        return null;
    }

    public contains(key: K): boolean {
        return this.getNode(key) !== null;
    }

    public get(key: K): V {
        let node: LinkedListNode<K, V> = this.getNode(key);
        return node === null ? null : node.value;
    }

    public add(key: K, value: V): void {
        let node: LinkedListNode<K, V> = this.getNode(key);
        if (node === null) {
            this.dummyHead.next = new LinkedListNode(key, value, this.dummyHead.next);
            this.size++;
        } else {
            node.value = value;
        }
    }

    public set(key: K, newValue: V): void {
        let node: LinkedListNode<K, V> = this.getNode(key);
        if (node === null) {
            throw new Error(`${key} doesnot exist...`);
        }
        node.value = newValue;
    }

    public remove(key: K): V {
        let prev = this.dummyHead;
        while(prev.next !== null) {
            if (prev.next.key === key) {
                break;
            }
            prev = prev.next;
        }

        if (prev.next !== null) {
            let delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
            this.size--;
            return delNode.value;
        }

        return null;
    }
}
```