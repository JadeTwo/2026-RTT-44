// X Create a file called stack.ts.
// X Implement a generic Stack class that supports operations like push, pop, and peek.
// X push should add an item of a generic type T to the stack.
// X pop should remove and return the item at the top of the stack.
// X peek should return the item at the top of the stack without removing it.
// Create instances of the Stack class for different data types (e.g., number, string) and demonstrate its functionality.

class Stack<T> {

    // property for our stack
    items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }

    // the return is a union type (either T or undefined)
    pop(): T | undefined {
        return this.items.pop()
    }

    peek(): T {
        return this.items[this.items.length - 1]
    }

}


// create an object (instance) from the class
const stack1 = new Stack<number>();
const stack2 = new Stack<string>();
const stack3 = new Stack<boolean>();

// use the methods
stack1.push(5);
stack2.push("Bob");
stack3.push(true);
stack1.push(10);
stack2.push("Billy");
stack3.push(false);

console.log(stack1.items, stack2.items, stack3.items)

const removedItem = stack1.pop()

console.log(stack1.items, stack2.items, stack3.items)

console.log(removedItem);

console.log(stack2.peek(), stack3.peek());