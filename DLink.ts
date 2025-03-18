class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedLists {
  head: ListNode | null;
  constructor() {
    this.head = null;
  }
  append(value: number): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  //   Insert at the end
  append(value: number): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at the beginning
  prepend(value: number): void {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete a value
  delete(value: number): void {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Print the linked list
  print(): void {
    let current = this.head;
    const result: number[] = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
}

// Example Usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30

list.prepend(5);
list.print(); // Output: 5 -> 10 -> 20 -> 30

list.delete(20);
list.print(); // Output: 5 -> 10 -> 30
