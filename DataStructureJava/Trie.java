// 字典树
import java.util.TreeMap;

public class Trie {
    // Trie节点
    private class Node {
        // 标记当前节点是否是一个单词的结尾
        public boolean isWord;
        public TreeMap<Character, Node> next;

        public Node(boolean isWord) {
            this.isWord = isWord;
        }

        public Node() {
            this(false);
        }
    }

    private Node root;
    private int size;

    public Trie() {
        root = new Node();
        size = 0;
    }

    public int getSize() {
        return size;
    }

    // 向Trie中添加一个新的单词word
    public void add(String word) {
        Node cur = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            // 如果cur的下一个节点中寻找不到c，那就在next新建一个key为c的TreeMap
            if (cur.next.get(c) == null)
                cur.next.put(c, new Node());
            // 如果cur的下一个节点中有c，那直接移动cur指针到c上面
            cur = cur.next.get(c);
        }
        // 遍历到最后需要判断当前的节点是不是某个单词的尾结点
        if (!cur.isWord) {
            cur.isWord = true;
            size++;
        }
    }

    // 查询某个单词是否在Trie中
    public boolean contains(String word) {
        Node curr = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (curr.next.get(c) == null)
                return false;
            curr = curr.next.get(c);
        }
        return curr.isWord;
    }

    // 查询是否在Trie中有单词以prefix为前缀
    public boolean isPrefix(String prefix) {
        Node curr = root;
        for (int i = 0; i < prefix.length(); i++) {
            char c = prefix.charAt(i);
            if (curr.next.get(c) == null)
                return false;
            curr = curr.next.get(c);
        }
        return true;
    }
}
