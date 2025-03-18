class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Linked {
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

  prepend(value: number): void {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  delete(value: number): void {
    if (!this.head) return;
    if (this.head.value == value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current.next = current;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
}
