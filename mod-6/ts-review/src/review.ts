// type string
let quote: string = "to be or not to be";
let isValid: boolean = true;

// array of type number
const years: number[] = [1855, 1999, 1980, 1975, 1983];

// tuple
const nameAndAge: [string, number] = ["Bob", 50];

// enums
enum Genre {
    Fiction,  // 0
    Mystery,  // 1
    Romance,
    History,
    Anime,
    Poetry
}

enum OrderStatus {
    Pending,
    Completed,
    Shipped,
    Cancelled
}


// interface
interface Book {
    title: string,
    author: string,
    genre: Genre,
    published: number,
    pages?: number // optional property (uses the question mark)
}

const book: Book = {
    title: 'Leaves of Grass',
    author: 'Walt Whitman',
    genre: Genre.Poetry,
    published: 1855,
    pages: 300
}

// array of type Book 
const library: Book[] = [];

// function parameters and return type
function addBook(book: Book): void {    // void means no return value
    library.push(book);
    console.log(library);
}

// call that addBook function and pass it an object of type Book
addBook(book);
