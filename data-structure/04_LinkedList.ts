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

class LinkedList<E> {
    private head: LinkedListNode<E> = null;
    private size: number = 0;
    private dummyHead = new LinkedListNode<E>(null, null); // 虚拟头结点

    // 获取链表中元素的个数
    public getSize(): number {
        return this.size;
    }

    // 返回链表是否为空
    public isEmpty(): boolean {
        return this.size === 0;
    }

    // 在链表头部添加元素e
    addFirst(e: E): void {
        this.add(0, e);
    }

    // 在链表的index位置添加元素
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

    // 在链表末尾添加元素
    addLast(e: E): void {
        this.add(this.size, e);
    }

    // 获取链表中的第index个位置的元素
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

    // 获取链表中的第一个元素
    getFirst(): E {
        return this.get(0);
    }

    // 获取链表中的最后一个元素
    getLast(): E {
        return this.get(this.size - 1);
    }

    // 修改链表中的某一个元素
    set(index: number, e: E): void {
        if (index < 0 || index >= this.size) {
            throw new Error('Set failed. Illegal index.');
        }

        let cur = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.e = e;
    }

    // 查找链表中是否包含某一个元素
    contains(e: E) {
        let cur = this.dummyHead.next;
        while(cur.next !== null) {
            if (cur.e === e) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    // 从链表中移除一个元素
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

    removeFirst(): E {
        return this.remove(0);
    }

    removeLast(): E {
        return this.remove(this.size - 1);
    }

    removeElement(e: E): void {
        let prev = this.dummyHead;
        while(prev.next !== null) {
            if (prev.next.e === e) {
                break;
            }
            prev = prev.next;
        }

        if (prev.next !== null) {
            let delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
        }
    }

    toString(): void {
        let res = '';
        let cur: LinkedListNode<E> = this.dummyHead.next;
        while(cur !== null) {
            res += `${cur}->`;
            cur = cur.next;
        }
        res += 'NULL';
        console.log(res);
    }
}

export default LinkedList;

// let ll = new LinkedList<number>();
// ll.add(0, 1);
// ll.toString();
// ll.add(0, 2);
// ll.add(0, 3);
// ll.add(0, 4);
// ll.add(0, 5);
// ll.toString();
// console.log(ll.get(1));
// ll.set(0, 100);
// ll.toString();
// ll.remove(2);
// ll.toString();
// ll.removeElement(2);
// ll.toString();
