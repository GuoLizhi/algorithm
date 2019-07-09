import AVLTree from './15_AVLTree';

interface MyMap<K, V> {
    add(key: K, value: V): void;
    remove(key: K): V;
    contains(key: K): boolean;
    get(key: K): V;
    set(key: K, newValue: V): void;
    getSize(): number;
    isEmpty(): boolean;
}

class AVLMap<K, V> implements MyMap<K, V> {
    private avl: AVLTree<K, V> = new AVLTree<K, V>();

    getSize(): number {
        return this.avl.getSize();
    }

    isEmpty(): boolean {
        return this.avl.isEmpty();
    }

    contains(key: K): boolean {
        return this.avl.contains(key);
    }
    
    add(key: K, value: V): void {
        this.avl.add(key, value);
    }

    get(key: K): V {
        return this.avl.get(key);
    }

    set(key: K, newValue: V): void {
        this.avl.set(key, newValue);
    }

    remove(key: K): V {
        return this.avl.remove(key);
    }
}

export default AVLMap;