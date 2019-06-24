/**
 * 数据结构-栈
 * 底层的数据结构使用js原生数组实现
 */
class Stack {
    constructor() {
        this.stack = [];
    }

    // 判断栈是否为空
    isEmpty() {
        return this.stack.length === 0;
    }

    // 获取栈的大小
    size() {
        return this.stack.length;
    }

    // 向栈用添加一个元素
    push(element) {
        this.stack.push(element);
    }

    // 出栈一个元素
    pop() {
        if (this.stack.length === 0) {
            return 'empty';
        }
        return this.stack.pop();
    }

    // 查看栈顶元素
    peek() {
        if (this.stack.length === 0) {
            return 'empty';
        }
        return this.stack[this.stack.length - 1];
    }

    // 清除栈中的元素
    clear() {
        this.stack = [];
    }

    // 打印
    print() {
        if (this.stack.length === 0) {
            console.log(`this stack is empty`);
        }
        console.log(this.stack.toString());
    }
}

// 测试用例
// let stack = new Stack();
// stack.push(1);
// stack.print();
// stack.pop();
// stack.print();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.print();
// console.log(stack.peek())