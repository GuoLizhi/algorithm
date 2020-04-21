public class BSTSet<E extends Comparable<E>> implements Set<E> {
    private BST<E> bst;

    public BSTSet() {
        bst = new BST<>();
    }

    // 时间复杂度O(1)
    @Override
    public int getSize() {
        return bst.size();
    }

    // 时间复杂度O(1)
    @Override
    public boolean isEmpty() {
        return bst.isEmpty();
    }

    // 时间复杂度O(logN)
    @Override
    public void add(E e) {
        bst.add(e);
    }

    // 时间复杂度O(logN)
    @Override
    public boolean contains(E e) {
        return bst.contains(e);
    }

    // 时间复杂度O(logN)
    @Override
    public void remove(E e) {
        bst.remove(e);
    }
}
