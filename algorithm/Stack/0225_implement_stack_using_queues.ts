/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/implement-stack-using-queues/
 * @time   2019-10-26
 */
class MyStack {

  private queue1: number[] = [];
  private queue2: number[] = [];

  // Time Complexity O(1)
  push(x: number) {
    if (this.queue1.length !== 0) {
      this.queue1.push(x);
    } else {
      this.queue2.push(x);
    }
  }

  private moveAToB() {
    if (this.queue2.length !== 0) {
      let tmp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = tmp;
    }

    let len = this.queue1.length;
    for (let i = 0; i < len - 1; i++) {
      this.queue2.push(this.queue1.shift());
    }
  }

  // Time Complexity O(n)
  pop(): number {
    this.moveAToB();
    return this.queue1.shift();
  }

  top(): number {
    this.moveAToB();
    let top = this.queue1.shift();
    this.queue2.push(top);
    return top;
  }

  empty(): boolean {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }
}
