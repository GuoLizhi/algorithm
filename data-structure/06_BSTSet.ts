// 基于二分搜索树实现的集合Set
import BST from './05_BST';

interface MySet<E> {
    add(e: E): void;
    remove(e: E): void;
    contains(e : E): boolean;
    getSize(): number;
    isEmpty(): boolean;
}

class BSTSet<E> implements MySet<E> {
    private bst: BST<E> = new BST<E>();

    // 向集合中添加元素
    public add(e: E): void {
        this.bst.add(e);
    }

    // 在集合中删除元素
    public remove(e: E): void {
        this.bst.remove(e);
    }

    // 判断集合中是否包含某个元素
    public contains(e: E): boolean {
        return this.bst.contains(e);
    }

    // 获取集合的大小
    public getSize(): number {
        return this.bst.getSize();
    }

    // 判断集合是否为空
    public isEmpty(): boolean {
        return this.bst.isEmpty();
    }
}

export default BSTSet;