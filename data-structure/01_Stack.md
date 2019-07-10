> 本文的源码在[这里](https://github.com/GuoLizhi/algorithm/blob/master/data-structure/01_Stack.ts)，可以参考一下

栈也是一种使用非常广泛的线性数据结构，它具有后进先出`last in first out`的特点。通俗的例子就像我们平时一本一本的往上放书，等到我们又想用书时，我们首先接触到的总是我们最后一本放上去的书。       
栈的添加和删除操作总是在栈的一端完成，这一端被称为`栈顶`，对于栈的实现，我会采用[上一篇](https://github.com/GuoLizhi/algorithm/blob/master/data-structure/00_Array.ts)中实现的数组作为底层的数据结构，所有栈的操作都会在这个底层的数组中完成。栈的主要操作有两个，一个是入栈，一个是出栈        
首先我们会定义一个TypeScript接口，这个接口会包含基础的栈类的实现

```ts
interface Stack<E> {
    getSize(): number; // 获取栈中元素的个数
    isEmpty(): boolean; // 判断栈是否为空
    push(e: E): void; // 入栈一个元素
    pop(): E; // 出栈一个元素
    peek(): E; // 查看栈顶元素
}
```

再来看看我们类的实例属性和构造函数，其中MyArray就是上一篇中实现的数组

```ts
class ArrayStack<E> implements Stack<E> {
    private array: MyArray<E>;
    constructor(capacity: number = 10) {
        this.array = new MyArray<E>(capacity);
    }
}
```

#### 1.入栈
在有之前数组的基础上，入栈也是一个非常简单的过程，时间复杂度是`O(1)`

```ts
public push(e: E): void {
    this.array.addLast(e);
}
```

![栈-入栈](http://www.lznism.com/image/栈-入栈.png)

#### 2.出栈
出栈也是一个时间复杂度为`O(1)`的操作

```ts
public pop(): E {
    return this.array.removeLast();
}
```

![栈-入栈](http://www.lznism.com/image/栈-出栈.png)
