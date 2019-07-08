interface UF {
    
    getSize(): number;
    isConnected(p: number, q: number): boolean;
    unionElements(p: number, q: number): void;
}

// 第一版的UnionFind
export class UnionFind1 implements UF {

    private id: Array<number>;

    constructor(size: number) {
        this.id = new Array<number>(size);
        for (let i = 0; i < size; i++) {
            this.id[i] = i;
        }
    }

    getSize(): number {
        return this.id.length;
    }

    // 查找元素p所对应的集合编号
    private find(p: number): number {
        if (p < 0 || p >= this.id.length) {
            throw new Error('p is out of bound.');
        }
        return this.id[p];
    }

    // 查看元素p和元素q是否同属一个集合
    public isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    // 合并元素p和元素q所属的集合
    public unionElements(p: number, q: number): void {
        let qId: number = this.find(q);
        let pId: number = this.find(p);
        if (qId === pId) {
            return;
        }

        // 合并过程需要遍历一遍所有的元素，将两个元素的所属集合编号合并
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pId) {
                this.id[i] = qId;
            }
        }
    }
}

// 第二版的UnionFind
export class UnionFind2 implements UF {
    // 使用一个数组构建一棵指向父节点的树
    // parent[i]表示第一个元素所指向的父亲节点
    private parent: number[];

    constructor(size: number) {
        this.parent = new Array<number>(size);
        // 初始化, 每一个parent[i]指向自己, 表示每一个元素自己自成一个集合
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
        }
    }

    getSize(): number {
        return this.parent.length;
    }

    // 查找过程，查找元素p所对应的集合编号
    private find(p: number): number {
        if (p < 0 || p >= this.parent.length) {
            throw new Error('p is out of bound.');
        }

        // 不断去查找自己的父亲节点，直到达到根节点
        // 根节点的特点：parent[p] === p
        while (p !== this.parent[p]) {
            p = this.parent[p];
        }
        return p;
    }

    // 查看p和q是否属于一个集合
    public isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    // 合并元素p和元素q所属的集合
    public unionElements(p: number, q: number): void {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        this.parent[pRoot] = qRoot;
    }
}

// 第三版的UnionFind
export class UnionFind3 implements UF {
    // 使用一个数组构建一棵指向父节点的树
    // parent[i]表示第一个元素所指向的父亲节点
    private parent: number[];
    // sz[i]表示以i为根的集合中元素个数
    private sz: number[];

    constructor(size: number) {
        this.parent = new Array<number>(size);
        this.sz = new Array<number>(size);
        // 初始化, 每一个parent[i]指向自己, 表示每一个元素自己自成一个集合
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.sz[i] = 1;
        }
    }

    getSize(): number {
        return this.parent.length;
    }

    // 查找过程，查找元素p所对应的集合编号
    private find(p: number): number {
        if (p < 0 || p >= this.parent.length) {
            throw new Error('p is out of bound.');
        }

        // 不断去查找自己的父亲节点，直到达到根节点
        // 根节点的特点：parent[p] === p
        while (p !== this.parent[p]) {
            p = this.parent[p];
        }
        return p;
    }

    // 查看p和q是否属于一个集合
    public isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    // 合并元素p和元素q所属的集合
    public unionElements(p: number, q: number): void {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        
        // 根据两个元素所在的树的元素个数不同判断合并方向
        // 将元素个数少的集合合并到元素个数多的集合上
        if (this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        } else {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }
}

// 第四版的UnionFind
// 基于rank的优化
export class UnionFind4 implements UF {
    // 使用一个数组构建一棵指向父节点的树
    // parent[i]表示第一个元素所指向的父亲节点
    private parent: number[];
    private rank: number[];

    constructor(size: number) {
        this.parent = new Array<number>(size);
        this.rank = new Array<number>(size);
        // 初始化, 每一个parent[i]指向自己, 表示每一个元素自己自成一个集合
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    getSize(): number {
        return this.parent.length;
    }

    // 查找过程，查找元素p所对应的集合编号
    private find(p: number): number {
        if (p < 0 || p >= this.parent.length) {
            throw new Error('p is out of bound.');
        }

        // 不断去查找自己的父亲节点，直到达到根节点
        // 根节点的特点：parent[p] === p
        while (p !== this.parent[p]) {
            p = this.parent[p];
        }
        return p;
    }

    // 查看p和q是否属于一个集合
    public isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    // 合并元素p和元素q所属的集合
    public unionElements(p: number, q: number): void {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        
        // 根据两个元素所在树的rank不同判断合并方向
        // 将rank低的集合合并到rank高的集合上
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        } else {
            this.parent[pRoot] = qRoot;
            this.rank[qRoot] += 1;
        }
    }
}

// 第五版的UnionFind
export class UnionFind5 implements UF {
    // 使用一个数组构建一棵指向父节点的树
    // parent[i]表示第一个元素所指向的父亲节点
    private parent: number[];
    private rank: number[];

    constructor(size: number) {
        this.parent = new Array<number>(size);
        this.rank = new Array<number>(size);
        // 初始化, 每一个parent[i]指向自己, 表示每一个元素自己自成一个集合
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    getSize(): number {
        return this.parent.length;
    }

    // 查找过程，查找元素p所对应的集合编号
    private find(p: number): number {
        if (p < 0 || p >= this.parent.length) {
            throw new Error('p is out of bound.');
        }

        // 不断去查找自己的父亲节点，直到达到根节点
        // 根节点的特点：parent[p] === p
        while (p !== this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]];
            p = this.parent[p];
        }
        return p;
    }

    // 查看p和q是否属于一个集合
    public isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    // 合并元素p和元素q所属的集合
    public unionElements(p: number, q: number): void {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        
        // 根据两个元素所在树的rank不同判断合并方向
        // 将rank低的集合合并到rank高的集合上
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        } else {
            this.parent[pRoot] = qRoot;
            this.rank[qRoot] += 1;
        }
    }
}