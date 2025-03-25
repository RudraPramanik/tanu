class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Push an element onto the stack
  push(element: T): void {
    this.items.push(element);
  }

  // Pop an element from the stack
  pop(): T | null {
    if (this.isEmpty()) {
      return null; // Return null instead of a string for type safety
    }
    return this.items.pop() as T;
  }

  // Peek (get the top element of the stack without removing it)
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size(): number {
    return this.items.length;
  }

  // Print the stack elements
  print(): void {
    console.log(this.items.join(' -> '));
  }
}

// Example usage
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);

console.log('Top element:', stack.peek()); // Output: 30
console.log('Stack size:', stack.size()); // Output: 3
console.log('Popped:', stack.pop()); // Output: 30
stack.print(); // Output: 10 -> 20
