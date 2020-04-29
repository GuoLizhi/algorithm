import UF from './interface/UF'

export default class UnionFind implements UF {
  // 使用一个数组构建一棵指向父节点的树, parent[i]表示第i个元素所指向的父节点
  private parent: number[];

  constructor(size: number) {
    this.parent = new Array<number>(size);
    // 初始化，每一个parent[i]指向自己，表示每个元素与自己自成一个集合
    for (let i = 0; i < size; i++)
      this.parent[i] = i;
  }

  getSize(): number {
    return this.parent.length;
  }

  // 查找元素p所对应的集合编号，O(1)时间复杂度
  private find(p: number): number {
    if (p < 0 || p >= this.parent.length)
      throw new Error('p is out of bound');
    
    // 不断的查找自己的父节点，直到到达根节点
    // 根节点的特点: parent[p] == p
    while (p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  // 判断p和q是否属于同一集合，O(1)时间复杂度
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  // 合并元素p和元素q所属的集合，O(n)时间复杂度
  unionElements(p: number, q: number): void {
    const pRoot = this.find(p);
    const qRoot = this.find(q);
    if (pRoot === qRoot)
      return;
    this.parent[pRoot] = qRoot;
  }
}