class MyArray<T> {
    private data: Array<T>;
    private size: number = 0;

    // 构造函数，传入数组容量capacity
    constructor(capacity) {
        this.data = new Array(capacity);
    }

    // 获取数组容量
    public getCapacity(): number {
        return this.data.length;
    }

    // 获取数组中元素的个数
    public getSize(): number {
        return this.size;
    }

    // 返回数组是否为空
    public isEmpty(): boolean {
        return this.size === 0;
    }

    // 在index索引的位置插入一个新的元素e
    public add(index: number, e: T) {
        if (index < 0 || index > this.size) {
            throw new Error('Add failed. Required index >= 0 and index <= size.');
        }

        // 如果当前数组中元素的个数等于数组容量时，需要进行扩容操作
        if (this.size === this.data.length) {
            this.resize(2 * this.data.length);
        }

        // 将index后面的元素每一个向后挪一个位置
        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }

        this.data[index] = e;
        this.size++;
    }

    // 向所有的元素后添加一个元素
    public addLast(e: T): void {
        this.add(this.size, e);
    }

    // 在所有的元素前面添加一个元素
    public addFirst(e: T): void {
        this.add(0, e);
    }

    // 修改index索引位置的元素为e
    public set(index: number, e: T): void {
        if (index < 0 || index >= this.size) {
            throw new Error('Set failed. Index is illegal.');
        }
        this.data[index] = e;
    }

    // 查找数组中是否包含元素e
    public contains(e: T): boolean {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return true;
            }
        }
        return false;
    }

    // 查找元素e所在的索引，如果不存在元素e，则返回-1
    public find(e: T): number {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return i;
            }
        }
        return -1;
    }

    // 从数组中删除index位置的元素
    public remove(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error('Remove failed. Index is illegal.');
        }

        let ret = this.data[index];
        // 将index之后的每一个元素向前挪一个位置
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

    // 从数组中删除第一个元素，返回删除的元素
    public removeFirst(): T {
        return this.remove(0);
    }

    // 从数组中删除最后一个元素，返回删除的元素
    public removeLast(): T {
        return this.remove(this.size - 1);
    }

    // 从数组中删除元素e
    public removeElement(e: T): void {
        let index = this.find(e);
        if (index !== -1) {
            this.remove(index);
        }
    }

    // 数组扩容或者缩容
    private resize(newCapacity: number): void {
        let newData = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }

    public toString(): void {
        let str = ``;
        str += `Array: size = ${this.size}, capacity = ${this.data.length}\n`;
        str += '[';
        for (let i = 0; i < this.size; i++) {
            str += this.data[i];
            if (i !== this.size - 1) {
                str += ', ';
            }
        }
        str += ']';
        console.log(str);
    }
}

export default MyArray;

// let arr = new MyArray(10);
// arr.addFirst(0);
// arr.addFirst(1);
// arr.addFirst(2);
// arr.addFirst(3);
// arr.addFirst(4);
// arr.addFirst(5);
// arr.addFirst(6);
// arr.addFirst(7);
// arr.addFirst(8);
// arr.addFirst(9);
// console.log(arr.toString());
// arr.addLast(100);
// console.log(arr.toString());
// arr.removeFirst();
// arr.removeLast();
// arr.removeLast();
// arr.removeLast();
// arr.removeLast();
// arr.removeLast();
// arr.add(1, 3)
// arr.remove(1);
// console.log(arr.removeElement(8))
// console.log(arr.toString());
