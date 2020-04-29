import UF from './interface/UF'

export default class UnionFind implements UF {
  private id: number[];

  constructor(size: number) {
    this.id = new Array<number>(size);
    // 初始化，每个id[i]指向自己，没有合并的元素
    for (let i = 0; i < size; i++)
      this.id[i] = i;
  }

  getSize(): number {
    return this.id.length;
  }

  // 查找元素p所对应的集合编号，O(1)时间复杂度
  private find(p: number): number {
    if (p < 0 || p >= this.id.length)
      throw new Error('p is out of bound');
    return this.id[p];
  }

  // 判断p和q是否属于同一集合，O(1)时间复杂度
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  // 合并元素p和元素q所属的集合，O(n)时间复杂度
  unionElements(p: number, q: number): void {
    const pID = this.find(p);
    const qID = this.find(q);
    if (pID === qID)
      return;
    
    // 合并过程需要遍历一遍所有元素，将两个元素所属的编号集合合并
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pID)
        this.id[i] = qID;
    }
  }
}