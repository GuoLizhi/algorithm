public class UnionFind4 implements UF {
    // 使用一个数组构建一棵指向父节点的树, parent[i]表示第i个元素所指向的父节点
    private int[] parent;
    // rank[i]表示以i为根的集合所表示的树的层数
    private int[] rank;

    public UnionFind4(int size) {
        parent = new int[size];
        // 初始化，每一个parent[i]指向自己，表示每个元素与自己自成一个集合
        for (int i = 0; i < size; i++) {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    @Override
    public int getSize() {
        return parent.length;
    }

    // 查找过程，查找元素p所对应的集合编号，O(h)的时间复杂度，h为树的高度
    private int find(int p) {
        if (p < 0 || p >= parent.length)
            throw new IllegalArgumentException("p is out of bound");
        // 不断的查找自己的父节点，直到到达根节点
        // 根节点的特点: parent[p] == p
        while (parent[p] != p) {
            parent[p] = parent[parent[p]]; // 路径压缩
            p = parent[p];
        }
        return p;
    }

    @Override
    public boolean isConnected(int p, int q) {
        return find(p) == find(q);
    }

    @Override
    public void unionElements(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);
        if (pRoot == qRoot)
            return;

        // 根据连个元素所在树的rank不同判断合并的方向
        // 将rank低的集合合并到rank高的集合上
        if (rank[pRoot] > rank[qRoot]) {
            parent[qRoot] = pRoot;
        } else if (rank[pRoot] < rank[qRoot]) {
            parent[pRoot] = qRoot;
        } else {
            parent[pRoot] = qRoot;
            rank[qRoot] += 1; // 此时需要维护rank的值
        }
    }
}
