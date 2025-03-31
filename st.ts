class Stack<T> {
  private items: T[]; // Array to store stack elements

  constructor() {
    this.items = [];
  }

  // Push element onto the stack
  push(element: T): void {
    this.items.push(element);
  }

  // Pop element from the stack
  pop(): T | undefined {
    if (this.isEmpty()) {
      console.log('Stack is empty!');
      return undefined;
    }
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek(): T | undefined {
    if (this.isEmpty()) {
      console.log('Stack is empty!');
      return undefined;
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

  // Print stack elements
  printStack(): void {
    console.log(this.items.join(' '));
  }
}

// Example Usage
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log('Stack size:', stack.size()); // Output: 3
console.log('Top element:', stack.peek()); // Output: 30

console.log('Popped element:', stack.pop()); // Output: 30
console.log('Stack after pop:');
stack.printStack(); // Output: 10 20
