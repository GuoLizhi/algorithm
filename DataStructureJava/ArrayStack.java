public class ArrayStack<E> implements Stack<E> {
    Array<E> array;
    public ArrayStack(int capacity) {
        array = new Array<>(capacity);
    }

    public ArrayStack() {
        array = new Array<>();
    }

    // 时间复杂度O(1)
    // 获取栈中当前有效元素的个数
    @Override
    public int getSize() {
        return array.getSize();
    }

    // 时间复杂度O(1)
    // 判断当前栈是否为空
    @Override
    public boolean isEmpty() {
        return array.isEmpty();
    }

    // 时间复杂度O(1)
    // 获取当前栈的容量
    public int getCapacity() {
        return array.getCapacity();
    }

    // 时间复杂度O(1)
    // 向栈中添加一个元素
    @Override
    public void push(E e) {
        array.addLast(e);
    }

    // 时间复杂度O(1)
    // 出栈一个元素
    @Override
    public E pop() {
        return array.removeLast();
    }

    // 时间复杂度O(1)
    // 查看栈顶的元素
    @Override
    public E peek() {
        return array.getLast();
    }

    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();
        res.append("Stack: [");
        for (int i = 0; i < array.getSize(); i++) {
            res.append(array.get(i));
            if (i != array.getSize() - 1)
                res.append(", ");
        }
        res.append("] top");
        return res.toString();
    }

    public static void main(String[] args) {
        ArrayStack<Integer> stack = new ArrayStack<>();
        for (int i = 0; i < 5; i++) {
            stack.push(i);
            System.out.println(stack);
        }

        stack.pop();
        System.out.println(stack);

        int topEl = stack.peek();
        System.out.println(topEl);
    }
}
