public class UnionFind implements UF {
    private int[] id;
    public UnionFind(int size) {
        id = new int[size];
        // 初始化，每个id[i]指向自己，没有合并的元素
        for (int i = 0; i < size; i++)
            id[i] = i;
    }

    @Override
    public int getSize() {
        return id.length;
    }

    // 查找元素p所对应的集合编号，O(1)时间复杂度
    private int find(int p) {
        if (p < 0 || p >= id.length)
            throw new IllegalArgumentException("p is out of bound.");
        return id[p];
    }

    // 判断p和q是否属于同一集合，O(1)时间复杂度
    @Override
    public boolean isConnected(int p, int q) {
        return find(p) == find(q);
    }

    // 合并元素p和元素q所属的集合，O(n)时间复杂度
    @Override
    public void unionElements(int p, int q) {
        int pID = find(p);
        int qID = find(q);
        if (pID == qID)
            return;

        // 合并过程需要遍历一遍所有元素，将两个元素所属的编号集合合并
        for (int i = 0; i < id.length; i++)
            if (id[i] == pID)
                id[i] = qID;
    }
}
