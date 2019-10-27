/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/min-stack/
 * @time   2019-10-26
 */

class MinStack {
  private minStack: number[] = [];
  private stack: number[] = [];

  push(x: number) {
    if (this.stack.length === 0) {
      this.minStack.push(x);
    } else {
      if (this.minStack[this.minStack.length - 1] > x) {
        this.minStack.push(x);
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1])
      }
    }
    this.stack.push(x);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

