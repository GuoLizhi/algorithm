// 基于链表实现的Map
interface MyMap<K, V> {
    add(key: K, value: V): void;
    remove(key: K): V;
    contains(key: K): boolean;
    get(key: K): V;
    set(key: K, newValue: V): void;
    getSize(): number;
    isEmpty(): boolean;
}

class LinkedListNode<K, V> {
    public key: K;
    public value: V;
    public next: LinkedListNode<K, V>;

    constructor(key: K, value: V, next: LinkedListNode<K, V>) {
        this.key = key;
        this.value = value;
        this.next = next;
    }

    public toString(): String {
        return `${this.key} : ${this.value}`;
    }
}

class LinkedListMap<K, V> implements MyMap<K, V> {
    private dummyHead: LinkedListNode<K, V> = new LinkedListNode(null, null, null);
    private size: number = 0;

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    // 获取键为key的node
    private getNode(key: K): LinkedListNode<K, V> {
        let cur = this.dummyHead.next;
        while (cur.next !== null) {
            if (cur.key === key) {
                return cur;
            }
            cur = cur.next;
        }
        return null;
    }

    public contains(key: K): boolean {
        return this.getNode(key) !== null;
    }

    public get(key: K): V {
        let node: LinkedListNode<K, V> = this.getNode(key);
        return node === null ? null : node.value;
    }

    public add(key: K, value: V): void {
        let node: LinkedListNode<K, V> = this.getNode(key);
        if (node === null) {
            this.dummyHead.next = new LinkedListNode(key, value, this.dummyHead.next);
            this.size++;
        } else {
            node.value = value;
        }
    }

    public set(key: K, newValue: V): void {
        let node: LinkedListNode<K, V> = this.getNode(key);
        if (node === null) {
            throw new Error(`${key} doesnot exist...`);
        }
        node.value = newValue;
    }

    public remove(key: K): V {
        let prev = this.dummyHead;
        while(prev.next !== null) {
            if (prev.next.key === key) {
                break;
            }
            prev = prev.next;
        }

        if (prev.next !== null) {
            let delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
            this.size--;
            return delNode.value;
        }

        return null;
    }
}

export default LinkedListMap;