// generic T type for class Stack
class Stack<T> {

    items: T[];

    constructor() {
        this.items = [];
    }

    push(): void {
        // return
    }

    pop() {

    }

    peek() {

    }

}

const stack = new Stack<string>();

console.log(stack.items);