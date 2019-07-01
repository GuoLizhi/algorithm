/**
 * 棒球比赛
 * 你现在是棒球比赛记录员。
    给定一个字符串列表，每个字符串可以是以下四种类型之一：
    1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
    2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
    3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
    4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

    每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
    你需要返回你在所有回合中得分的总和。
 */
import ArrayStack from '../data-structure/01_Stack';
function calPoints(ops: Array<string>): number {
    let stack = new ArrayStack<number>(100);
    let ret: number = 0;
    for (let i = 0; i < ops.length; i++) {
        if(isNaN(Number(ops[i]))) {
            if (ops[i] === '+') {
                let firstPrev = stack.pop();
                let secondPrev = stack.peek();
                stack.push(firstPrev);
                stack.push(firstPrev + secondPrev);
            } else if (ops[i] === 'C') {
                stack.pop();
            } else if (ops[i] === 'D') {
                stack.push(stack.peek() * 2);
            }
        } else {
            stack.push(Number(ops[i]));
        }
    }

    while(stack.getSize() > 0) {
        ret += stack.pop();
    }

    return ret;
}

console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));