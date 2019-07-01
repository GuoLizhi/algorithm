// 基于链表实现的集合
import LinkedList from './04_LinkedList';

interface MySet<E> {
    add(e: E): void;
    remove(e: E): void;
    contains(e : E): boolean;
    getSize(): number;
    isEmpty(): boolean;
}

class LinkedListSet<E> implements MySet<E> {
    private list: LinkedList<E> = new LinkedList<E>();

    // 向集合中添加元素
    public add(e: E): void {
        if (!this.contains(e)) {
            this.list.addFirst(e);
        }    
    }

    // 在集合中删除元素
    public remove(e: E): void {
        this.list.removeElement(e);
    }

    // 判断集合中是否包含某个元素
    public contains(e: E): boolean {
        return this.list.contains(e); 
    }

    // 获取集合的大小
    public getSize(): number {
        return this.list.getSize();
    }

    // 判断集合是否为空
    public isEmpty(): boolean {
        return this.list.isEmpty();
    }
}

export default LinkedListSet;