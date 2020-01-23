class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  addFront(val) {
    var node = new Node(val);
    node.next = this.head;
    this.head = node;
    return this;
  };
  removeFront() {
    if (this.head != null) {
      this.head = this.head.next;
    };
    return this;
  };
  front() {
    if (this.head == null) {
      return null
    };
    return this.head.value;
  }
  contains(val) {
    var node = this.head;
    while (node != null) {
      if (node.value == val) {
        return true;
      };
      node = node.next
    };
    return false;
  }
}