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
  push(val) {
    if (this.head == null) {
      this.head = new ListNode(val);
      return this.head;
    }
    var node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new ListNode(val);
    return node.next;
  }
  display() {
    var node = this.head;
    var str = '';
    while (node != null) {
      str += node.val + ', '
      node = node.next;
    }
    return str.substring(0, str.length - 2);
  }
  min() {
    var node = this.head;
    var min = node.val;
    while (node != null) {
      if (node.val < min) {
        min = node.val;
      }
      node = node.next;
    }
    return min;
  }
  max() {
    var node = this.head;
    var max = node.val;
    while (node != null) {
      if (node.val > max) {
        max = node.val;
      }
      node = node.next;
    }
    return max;
  }
  average() {
    var node = this.head;
    var count = 0;
    var sum = 0;
    while (node != null) {
      count += 1;
      sum += node.val;
      node = node.next;
    }
    return sum / count;
  }
}

// Begin shenanigans

var list = new SinglyLinkedList();

for (i = 0; i <= 10; i++) {
  list.push(i);
}

console.log('List: ' + list.display());
console.log('Min: ' + list.min());
console.log('Max: ' + list.max());
console.log('Average: ' + list.average());