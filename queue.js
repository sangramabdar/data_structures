class MyNode {
    value;
    next = null;

    constructor(value) {
        this.value = value;
    }
}

class MyQueue {
    head = null;
    tail = null;

    enqueue(value) {
        let node = new MyNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        if (!this.tail) {
            this.tail = node;
            this.head.next = this.tail;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    dequeue() {
        if (!this.head) return null;

        let value = this.head.value;
        this.head = this.head.next;

        return value;
    }

    isEmpty() {
        if (!this.head) return true;
        return false;
    }

    front() {
        if (!this.head) return null;

        return this.head.value;
    }
}

let myQueue = new MyQueue();

myQueue.enqueue(2);
myQueue.enqueue(3);

while (!myQueue.isEmpty()) {
    console.log(myQueue.dequeue());
}