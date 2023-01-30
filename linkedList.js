class MyNode {
    value;
    next = null;

    constructor(value) {
        this.value = value;
    }
}

class MyLinkedList {
    head = null;
    tail = null;
    length = 0;

    add(value) {
        let node = new MyNode(value);
        this.length++;

        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        if (this.tail === null) {
            this.head.next = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    traverse() {
        let node;
        node = this.head;

        while (node != null) {
            console.log(node.value);
            node = node.next;
        }
    }

    isEmpty() {
        if (this.length === 0) return true;
        return false;
    }

    deleteFront() {
        if (!this.head) return null;

        let value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    deleteLast() {
        let value = null;
        if (this.length <= 0) return null;

        if (this.length === 1) {
            value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }

        if (this.length == 2) {
            value = this.tail.value;
            this.tail = this.head;
            this.head.next = null;
            return value;
        }

        let localIndex = 1;
        let node = this.head.next;
        let prev = this.head;

        while (node != null) {
            if (localIndex === this.length - 1) {
                value = node.value;
                prev.next = node.next;
                this.tail = prev;
                this.length--;
                break;
            } else {
                prev = node;
                node = node.next;
                localIndex++;
            }
        }

        return value;
    }

    remove(index) {
        let value = null;

        if (index >= this.length || index < 0 || this.length === 0) return null;

        if (index === 0) {
            value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        }

        if (index === 1 && this.length === 2) {
            value = this.tail.value;
            this.tail = this.head;
            this.head.next = null;
            this.length--;
            return value;
        }

        let localIndex = 1;
        let node = this.head.next;
        let prev = this.head;

        while (node != null) {
            if (localIndex === index && localIndex === this.length - 1) {
                value = node.value;
                prev.next = node.next;
                this.tail = prev;
                this.length--;
                break;
            } else if (localIndex === index) {
                value = node.value;
                prev.next = node.next;
                this.length--;
                break;
            } else {
                prev = node;
                node = node.next;
                localIndex++;
            }
        }
        return value;
    }
}

let myLinkedList = new MyLinkedList();

myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);

// console.log(myLinkedList.remove(1));
// console.log(myLinkedList.remove(1));
// console.log(myLinkedList.remove(1));
// console.log(myLinkedList.remove(0));
console.log(myLinkedList.deleteLast());