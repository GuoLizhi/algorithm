链表是一种比较高级的链式数据结构，它不同于前面几章介绍的数组，栈和队列，是一种特征比较明显的数据结构。链表中的每个节点都包含有指向下一个节点的指针，这样的特性使得我们可以方便的遍历整个链表，找到我们所需要的元素。遍历链表可以说在链表的增删改查中扮演着不可或缺的角色。

对于链表而言，增删改查依然是4个最重要的方法，下面我会一一介绍这四个方法，你可以从中体会遍历链表在整个操作中的重要性。

#### 链表的节点类
链表的每个节点都包含两个属性，一个是节点元素本身，另一个是指向下一个节点的指针，下一个节点同样是`LinkedListNode<E>`类型。

对于整个链表，会给它设置一个虚拟头结点`dummyHead`，这个节点是一个空节点，也就是说他本身元素存储为null，并且下一个节点也指向null

```ts
class LinkedListNode<E> {
    public e: E;
    public next: LinkedListNode<E>;
    constructor(e: E, next: LinkedListNode<E>) {
        this.e = e;
        this.next = next;
    }
    toString(): string {
        return this.e.toString();
    }
}
```

#### 在链表中添加元素
由于链表不像数组这种数据结构可以通过索引直接获取到相关元素的值，所以必须要通过遍历才能找到添加元素的位置。开始的时候我们从dummyHead开始，每次遍历是获取next位置的元素一直到`index-1`这个位置，所要添加的元素就是index-1的next位置。最后我们需要做的就是将新添加的元素的next指向之前index位置的元素

```ts
add(index: number, e: E): void {
    if (index < 0 || index > this.size) {
        throw new Error('Add failed. Illegal index.');
    }
    let prev: LinkedListNode<E> = this.dummyHead;
    for (let i = 0; i < index; i++) {
        prev = prev.next;
    }
    prev.next = new LinkedListNode<E>(e, prev.next);
    this.size++;
}
```

#### 在链表中查找和修改元素
查找元素我们从第一个节点开始，也就是dummyHead的下一个节点，依次向后遍历。找到这个元素之后，修改这个节点就变得简单了，只需要将`cur.e`替换成我们所需的元素即可

```ts
get(index: number): E {
    if (index < 0 || index >= this.size) {
        throw new Error('Get failed. Illegal index.');
    }

    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.e;
}
```

#### 在链表中删除元素
删除元素和添加元素差不多，我们需要遍历到待删除元素的前一个元素，然后让前一个元素的next指向index位置的next节点即可

```ts
remove(index: number): E {
    if (index < 0 || index >= this.size) {
        throw new Error('Remove failed. Illegal index.');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
        prev = prev.next;
    }
    let retNode: LinkedListNode<E> = prev.next;
    prev.next = retNode.next;
    retNode.next = null;
    this.size--;

    return retNode.e;
}
```

#### 在
