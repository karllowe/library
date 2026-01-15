const myLibrary = [];

function Book(title, author, pageNumber) {
    if (!new.target) {
        throw Error("Use the 'new' operator!")
    }
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.id = crypto.randomUUID()
};

function addBookToLibrary(title, author, pageNumber) {
    const newBook = new Book(title, author, pageNumber);
    myLibrary.push(newBook);
}

addBookToLibrary("the hobbit", "Tolken", 213);

addBookToLibrary("the shinning", "King", 3445);

console.log(myLibrary[1])