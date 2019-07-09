import AVLTree from './15_AVLTree';

interface MySet<E> {
    add(e: E): void;
    remove(e: E): void;
    contains(e : E): boolean;
    getSize(): number;
    isEmpty(): boolean;
}

class AVLSet<E> implements MySet<E> {
    private avl: AVLTree<E, object> = new AVLTree<E, object>();

    getSize(): number {
        return this.avl.getSize();
    }

    isEmpty(): boolean {
        return this.avl.isEmpty();
    }

    add(e: E): void {
        this.avl.add(e, null);
    }

    contains(e: E): boolean {
        return this.avl.contains(e);
    }

    remove(e: E) {
        this.avl.remove(e);
    }
}

export default AVLSet;