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
        var emptyNode = new Node(val);
        emptyNode.next = this.head;
        this.head = emptyNode;
        return this;
    }

    addBack(val) {
        var node = this.head;
        var emptyNode = new Node(val);
        if (node == null) {
            this.head = emptyNode
        }
        else {
            while (node.next != null) {
                node = node.next
            }
            node.next = emptyNode;
        }
        return this;
    }

    secondToLastval() {
        var node = this.head;
        if (node == null || node.next == null) {
            return null
        }
        while (node.next.next != null) {
            node = node.next
        }
        return node.val;
    }

    copy() {
        emptyList = new SinglyLinkedList()
        var node = this.head;
        while (node != null) {
            emptyList.addBack(node.val);
            node = node.next;
        }
        return emptyList;
    }

    filter(min, max) {
        var node = this.head;
        while (node != null && (node.val < min || node.val > max)) {
            node = node.next;
            this.head = node;
        }
        while (node != null) {
            while (node.next != null && (node.next.val < min || node.next.val > max)) {
                node.next = node.next.next
            }
            node = node.next;
        }
        return this;
    }

}