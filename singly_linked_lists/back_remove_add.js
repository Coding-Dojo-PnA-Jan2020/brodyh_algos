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
  back() {
    var node = this.head;
    if (node == null) {
      return null
    }
    while (node.next != null) {
      node = node.next;
    }
    return node.val;
  }
  removeBack() {
    var node = this.head;
    if (node != null) {
      if (node.next == null) {
        this.head = null;
      }
      else {
        while (node.next.next != null) {
          node = node.next;
        }
        node.next = null;
      }
    }
    return this;
  }
  addBack(val) {
    var node = this.head;
    var emptyNode = new Node(val);
    if (node == null) {
      this.head = emptyNode;
    }
    else {
      while (node.next != null) {
        node = node.next;
      }
      node.next = emptyNode;
    }
    return this;
  }
}