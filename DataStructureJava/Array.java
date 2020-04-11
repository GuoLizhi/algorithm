public class Array<E> {
    private E[] data;
    private int size;

    // 构造函数，传入数组的容量capacity
    public Array(int capacity) {
        data = (E[])new Object[capacity];
        size = 0;
    }

    // 无参数构造函数，默认数组的容量capacity=10
    public Array() {
        this(10);
    }

    // 获取数组中有效元素的个数
    public int getSize() {
        return size;
    }

    // 获取数组的容量
    public int getCapacity() {
        return data.length;
    }

    // 判断数组是否为空
    public boolean isEmpty() {
        return size == 0;
    }

    // Time Complexity O(1)
    // 向数组的末尾添加一个元素e
    public void addLast(E e) {
        add(size, e);
    }

    // Time Complexity O(n)
    // 向数组的头部添加一个元素e
    public void addFirst(E e) {
        add(0, e);
    }

    // Time Complexity O(n)
    // 在第index位置插入一个新元素e
    // 均摊时间复杂度
    // 假设capacity=n, 经过n+1次的addLast操作，触发resize，总共进行2n+1次基本操作
    // 因此平均每次addLast操作，进行2次的基本操作
    public void add(int index, E e) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("AddLast failed. Require index >=0 and index <= size");

        // 如果数组已满，则扩容1倍
        if (size == data.length)
            resize(2 * data.length);
        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }
        data[index] = e;
        size++;
    }

    // Time Complexity O(1)
    // 获取index索引位置的元素
    public E get(int index) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Get failed. Index is illegal.");
        return data[index];
    }

    // Time Complexity O(1)
    // 修改index位置的元素为e
    public void set(int index, E e) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Set failed. Index is illegal.");
        data[index] = e;
    }

    // Time Complexity O(n)
    // 查找数组中是否包含元素e
    public boolean contains(E e) {
        for (int i = 0; i < size; i++) {
            if (data[i].equals(e))
                return true;
        }
        return false;
    }

    // Time Complexity O(n)
    // 查找数组中元素e所在的索引，如果不存在元素e，就返回-1
    public int find(E e) {
        for (int i = 0; i < size; i++) {
            if (data[i].equals(e))
                return i;
        }
        return -1;
    }

    // Time Complexity O(n)
    // 删除指定位置index的元素，并返回删除的元素
    public E remove(int index) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Remove failed. Index is illegal.");

        E ret = data[index];
        for (int i = index + 1; i < size; i++)
            data[i - 1] = data[i];

        size--;
        data[size] = null;

        // 当size == capacity / 4时，才将capacity减半。防止复杂度震荡
        // data.length != 0 是因为不能常见capacity为0的数组
        if (size == data.length / 4 && data.length / 2 != 0)
            resize(data.length / 2);
        return ret;
    }

    // Time Complexity O(n)
    // 从数组中删除第一个元素，并返回删除的元素
    public E removeFirst() {
        return remove(0);
    }

    // Time Complexity O(1)
    // 从数组中删除最后一个元素，并返回删除的元素
    public E removeLast() {
        return remove(size - 1);
    }

    // Time Complexity O(n)
    // 从数组中删除元素e
    public void removeElement(E e) {
        int index = find(e);
        if (index != -1)
            remove(index);
    }

    private void resize(int newCapacity) {
        E[] newData = (E[])new Object[newCapacity];
        for (int i = 0; i < size; i++) {
            newData[i] = data[i];
        }
        data = newData;
    }

    // 覆盖父类的toString方法
    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();
        res.append(String.format("Array: size = %d, capacity = %d\n", size, data.length));
        res.append("[");
        for (int i = 0; i < size; i++) {
            res.append(data[i]);
            if (i != size - 1)
                res.append(", ");
        }
        res.append("]");
        return res.toString();
    }
}
