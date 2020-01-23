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

    update(node, val) {
        node.val = val;
    }

    print() {
        var node = this.head;
        while (node != null) {
            console.log(node.val);
            node = node.next;
        }
    }

    push(val) {
        if (this.head === null) {
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

    countFrom(node) {
        var count = 1;
        while (node.next !== null) {
            count++;
            node = node.next;
        }
        return count;
    }

}

// Begin shenanigans

var list = new SinglyLinkedList();
first = list.push('Person 1');

for (i = 2; i <= 5000; i++) {
    list.push('Person ' + i);
}

console.log('In line now:');
list.print();

console.log('Total people in line: ' + list.countFrom(first));