/**
 * 数据结构-队列
 * 底层的数据结构使用js原生数组实现
 * 
 */
class Queue {
    constructor() {
        this.queue = [];
    }

    // 获取队列中元素的个数
    getSize() {
        return this.queue.length;
    }

    // 判断队列是否为空
    isEmpty() {
        return this.getSize() === 0;
    }

    // 向队尾添加一个元素
    enqueue(element) {
        this.queue.push(element);
    }

    // 移除队列第一个元素
    dequeue() {
        if (this.getSize() === 0) {
            throw new Error('the queue is empty, cannot dequeue any element');
        }
        return this.queue.shift();
    }

    // 获取队首元素
    front() {
        if (this.getSize() === 0) {
            throw new Error('he queue is empty, cannot get the first element');
        }
        return this.queue[0];
    }

    // 清除队列中的元素
    clear() {
        this.queue = [];
    }

    // 打印
    print() {
        console.log(this.queue.toString());
    }
}

let queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.front())