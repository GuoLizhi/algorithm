/**
 * @author lizhi.guo@foxmail.com
 * @source https://leetcode-cn.com/problems/design-circular-deque/
 * @time   2019-11-11
 */

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k: number) {
  this.queue = new Array(k + 1)
  this.front = 0
  this.tail = 0
  this.len = k + 1
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value: number): boolean {
  if (this.isFull()) {
    return false
  } else {
    this.front = (this.front - 1 + this.len) % this.len
    this.queue[this.front] = value
    return true
  }
}

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value: number): boolean {
  if (this.isFull()) {
    return false
  } else {
    this.queue[this.tail] = value
    this.tail = (this.tail + 1) % this.len
    return true
  }
}

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.front = (this.front + 1) % this.len
    return true
  }
}

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.tail = (this.tail - 1 + this.len) % this.len
    return true
  }
}

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1
  }
  return this.queue[this.front]
}

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1
  }
  return this.queue[(this.tail - 1 + this.len) % this.len]
}

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.front === this.tail
}

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return (this.tail + 1) % this.len === this.front
}
