class MyNode {
    value;
    next = null;

    constructor(value) {
        this.value = value;
    }
}

class MyStack {
    head = null;

    peek() {
        if (!this.head) return null;
        return this.head.value;
    }

    push(value) {
        let node = new MyNode(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    pop() {
        if (!this.head) return null;

        let value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    isEmpty() {
        if (!this.head) return true;
        return false;
    }
}

let myStack = new MyStack();

myStack.push(1);
myStack.push(2);