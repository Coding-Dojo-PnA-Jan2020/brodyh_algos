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

}

// Begin shenanigans

var list = new SinglyLinkedList();

for (i = 0; i <= 10; i++) {
    list.push('Person ' + i);
}

console.log(list.display());