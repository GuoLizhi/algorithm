数组是数据结构中最简单，也是使用最广泛的一种。在原生的js中，数组给我们提供了很多方便的操作方法，比如`push()`, `pop()`, `shift()`, `unshift()`。但出于对数据结构的学习，我将不依赖这些方法，只是使用数组简单的存储元素功能，另外我会假定数组是定长数组。这样也方便我们计算相关的时间复杂度。另外我会使用`TypeScript`实现，主要是因为TypeScript的强类型控制，以及泛型这些高级特性。       

先来看我们自己实现数组的实例属性以及构造函数，我们用capacity来表示数组的容量，在用户没有传入容量的情况下，会给数组一个默认的capacity。我会用size来表示当前数组中元素的个数。

```ts
class MyArray<T> {
    private data: Array<T>;
    private size: number = 0;
    constructor(capacity = 10) {
        this.data = new Array(capacity);
    }
}
```

#### 1.在数组中插入元素
在数组index位置插入元素是我们经常使用的一个操作，那我们就需要从之前数组中index位置开始，每个元素向后移动一个位置。以便给新插入的元素挪出index这个位置。在操作的末尾，我们需要维护一下数组的size。

```ts
public add(index: number, e: T) {
    if (index < 0 || index > this.size) {
        throw new Error('Add failed. Required index >= 0 and index <= size.');
    }
    if (this.size === this.data.length) {
        this.resize(2 * this.data.length);
    }
    for (let i = this.size - 1; i >= index; i--) {
        this.data[i + 1] = this.data[i];
    }
    this.data[index] = e;
    this.size++;
}
```

![数组-插入](http://www.lznism.com/image/数组-添加.png)

在数组中添加元素，最好情况下，即在数组的尾部添加元素，这样用户只用操作一次，时间复杂度是O(1)；最差的情况下，用户需要操作size次，时间复杂度是O(n)

> 这里有一点需要注意，当数组当前元素的个数size和capacity相等时，我们需要给数组进行扩容为2倍处理，这个我后面会专门提及

#### 2.在数组中查询元素和修改元素
查询和修改数组中某个元素是数组中最常见的操作，只需要根据元素的索引即可来进行查询或者修改即可，时间复杂度为O(1)

```ts
// 获取数组中的任意元素
public get(index: number): T {
    if (index < 0 || index >= this.size) {
        throw new Error('Get failed. Index is illegal.');
    }
    return this.data[index];
}
// 修改index索引位置的元素为e
public set(index: number, e: T): void {
    if (index < 0 || index >= this.size) {
        throw new Error('Set failed. Index is illegal.');
    }
    this.data[index] = e;
}
```

#### 3.在数组中删除元素
在数组index位置删除元素，这里我们需要把数组从index+1位置开始，每个元素向前移动一个元素，`占领`之前这个index位置，并把之前index位置的元素置为undefined

```ts
public remove(index: number): T {
    if (index < 0 || index >= this.size) {
        throw new Error('Remove failed. Index is illegal.');
    }
    let ret = this.data[index];
    for (let i = index + 1; i < this.size; i++) {
        this.data[i - 1] = this.data[i];
    }
    this.size--;
    this.data[this.size] = undefined;
    // 如果数组中的元素仅为数组容量的1/4时，这时需要进行缩容操作
    if (this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
        this.resize(this.data.length / 2);
    }
    return ret;
}
```

![数组-删除](http://www.lznism.com/image/数组-删除.png)

在数组中删除元素，最好情况下，用户只用操作一次，即删除数组尾部元素，时间复杂度是O(1)；最差的情况下，用户需要操作size次，即删除数组中的第一个元素，时间复杂度是O(n)        

> 同样需要注意的是：当数组中的元素个数仅为数组容量的1/4时，我们需要对数组进行缩容为1/2操作

#### 4.数组的扩容或者缩容

数组的扩容和缩容操作很简单，原理就是接受一个新的容量，把之前数组中的内容复制到新数组中，并返回新的数组
```ts
private resize(newCapacity: number): void {
    let newData = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
        newData[i] = this.data[i];
    }
    this.data = newData;
}
```
