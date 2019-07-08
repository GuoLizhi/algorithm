// 基于BSTMap的Trie
import BSTMap from './08_BSTMap';
import Stack from './01_Stack';

class TrieNode {
    public isWord: boolean;
    public next: BSTMap<string, TrieNode> = new BSTMap<string, TrieNode>();

    constructor(isWord: boolean = false) {
        this.isWord = isWord;
    }
}

class Trie {
    private root: TrieNode = new TrieNode();
    private size: number = 0;

    getSize(): number {
        return this.size;
    }

    // 向Trie中添加一个新的单词
    public add(word: string): void {

        let cur: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let c: string = word.charAt(i);
            if (cur.next.get(c) !== null) {
                cur.next.set(c, new TrieNode());
            }
            cur = cur.next.get(c);
        }

        if (!cur.isWord) {
            cur.isWord = true;
            this.size++;
        }
    }

    // 查询单词是否在Trie中
    public contains(word: string): boolean {
        let cur: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let c: string = word.charAt(i);
            if (cur.next.get(c) === null) {
                return false;
            }
            cur = cur.next.get(c);
        }
        return cur.isWord;
    }

    // 查询Trie中是否有单词以prefix为前缀
    public isPrefix(prefix: string): boolean {
        
        let cur: TrieNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let c = prefix.charAt(i);
            if (cur.next.get(c) === null) {
                return false;
            }
            cur = cur.next.get(c);
        }
        return true;
    }

    // 删除word，返回删除是否成功
    public remove(word: string): boolean {

        // 将搜索沿路的节点放入栈中
        let stack: Stack<TrieNode> = new Stack<TrieNode>(10);
        stack.push(this.root);
        for (let i = 0; i < word.length; i++) {
            if (!stack.peek().next.contains(word.charAt(i))) {
                return false;
            }
            stack.push(stack.peek().next.get(word.charAt(i)));
        }

        if (!stack.peek()) {
            return false;
        }

        // 将该单词结尾isWord置空
        stack.peek().isWord = false;
        this.size--;

        // 如果单词最后一个字母的节点的next为空
        // 说明Trie中还存储了其它以该单词为前缀的单词。直接返回
        if (stack.peek().next.getSize() > 0) {
            return true;
        } else {
            stack.pop();
        }

        // 自底向上删除
        for (let i = word.length - 1; i >= 0; i--) {
            stack.peek().next.remove(word.charAt(i));
            // 如果一个节点的isWord为true,或者是其它单词的前缀，则直接返回
            if (stack.peek().isWord || stack.peek().next.getSize() > 0) {
                return true;
            }
            stack.pop();
        }
        return true;
    }
}

export default Trie;