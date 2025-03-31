class Queue<T> {
  private items: T[]; // Array to store queue elements

  constructor() {
    this.items = [];
  }

  // Enqueue (Add an element to the back of the queue)
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Dequeue (Remove and return the front element of the queue)
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      console.log('Queue is empty!');
      return undefined;
    }
    return this.items.shift();
  }

  // Peek (Get the front element without removing it)
  front(): T | undefined {
    if (this.isEmpty()) {
      console.log('Queue is empty!');
      return undefined;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size(): number {
    return this.items.length;
  }

  // Print the queue elements
  printQueue(): void {
    console.log(this.items.join(' '));
  }
}

// Example Usage
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('Queue size:', queue.size()); // Output: 3
console.log('Front element:', queue.front()); // Output: 10

console.log('Dequeued element:', queue.dequeue()); // Output: 10
console.log('Queue after dequeue:');
queue.printQueue(); // Output: 20 30
