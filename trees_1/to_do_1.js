class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    addNode(val, pos = this.root) {
        if (this.root == null) {
            this.root = new BSTNode(val);
        }
        else if (val < pos.val) {
            if (pos.left == null) {
                pos.left = new BSTNode(val);
            }
            else {
                return this.addNode(val, pos.left);
            }
        }
        else {
            if (pos.right == null) {
                pos.right = new BSTNode(val);
            }
            else {
                return this.addNode(val, pos.right);
            }
        }
        return;
    }

    contains(val, pos = this.root) {
        if (pos == null) {
            return false;
        }
        else if (val == pos.val) {
            return true;
        }
        else if (val < pos.val) {
            if (pos.left == null) {
                return false;
            }
            else {
                return this.contains(val, pos.left);
            }
        }
        else {
            if (pos.right == null) {
                return false;
            }
            else {
                return this.contains(val, pos.right);
            }
        }
        return;
    }

    min(pos = this.root) {
        if (pos == null) {
            return null;
        }
        if (pos.left == null) {
            return pos.val;
        }
        else {
            return this.min(pos.left);
        }
    }

    max(pos = this.root) {
        if (pos == null) {
            return null;
        }
        if (pos.right == null) {
            return pos.val;
        }
        else {
            return this.max(pos.right);
        }
    }

    size(pos = this.root) {
        if (pos == null) {
            return 0;
        }
        return 1 + this.size(pos.left) + this.size(pos.right);
    }

    isEmpty(pos = this.root) {
        if (pos.val == null) {
            if (this.isEmpty(pos.left) && this.isEmpty(pos.right)) {
                return true;
            }
        }
        else {
            return false;
        }
    }
}