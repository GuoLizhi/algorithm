public interface Stack<E> {
    void push(E e);
    E peek();
    E pop();
    boolean isEmpty();
    int getSize();
}
