class TrieNode {
  public isWord: boolean;
  public next: Map<string, TrieNode>;
  constructor(isWord = false) {
    this.isWord = isWord;
    this.next = null;
  }
}

class Trie {
  private root: TrieNode;
  private size: number;

  constructor() {
    this.root = new TrieNode();
    this.size = 0;
  }

  public getSize(): number {
    return this.size;
  }

  // 向Trie中添加一个新的单词word
  public add(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (curr.next.get(c) === null) {
        curr.next.set(c, new TrieNode());
      }
      curr = curr.next.get(c);
    }

    if (!curr.isWord) {
      curr.isWord = true;
      this.size++;
    }
  }

  // 查询某个单词是否在Trie中
  public contains(word: string): boolean {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (curr.next.get(c) === null)
        return false;
      curr = curr.next.get(c);
    }

    return curr.isWord;
  }

  // 查询在Trie中是否有单词以prefix为前缀
  public isPrefix(word: string): boolean {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (curr.next.get(c) === null)
        return false;
      curr = curr.next.get(c);
    }
    return true;
  }
}