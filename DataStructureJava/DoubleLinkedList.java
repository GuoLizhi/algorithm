public class DoubleLinkedList<E> {

    /**
     * 双向链表的节点信息
     * 每个节点都包含指向前一个和后一个节点的指针
     * 存储于节点上的key->value键值对
     */
    private class Node {
        public Node prev, next;
        public E key, value;
        public Node(E key, E value) {
            this.key = key;
            this.value = value;
        }
    }

    // 定义一个虚拟的头结点和虚拟尾结点
    private Node dummyHead, dummyTail;
    private int size;

    public DoubleLinkedList() {
        dummyHead = new Node(null, null);
        dummyTail = new Node(null, null);
        dummyHead.next = dummyTail;
        dummyTail.prev = dummyHead;
    }

    // 在链表头部添加元素
    public void addFirst(Node node) {
        // 先处理新插入的节点的prev和next
        node.next = dummyHead.next;
        node.prev = dummyHead;
        // 在处理之前dummyHead的next和dummyHead.next.prev
        dummyHead.next.prev = node;
        dummyHead.next = node;
        size++;
    }

    // 删除双链表中的node节点
    public void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        size--;
    }

    // 移除双链表中最后一个节点，并返回删除的元素
    public Node remove() {
        if (dummyTail.prev == dummyHead)
            return null;
        Node last = dummyTail.prev;
        remove(last);
        return last;
    }
    
    // 获取链表中的节点个数
    public int getSize() {
        return size;
    }
}
