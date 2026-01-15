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

const bookShelf = document.querySelector(".bookShelf");
const div = document.createElement("div");
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = "new Book";
    bookTitle.classList.add("bookTitle")
    
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Test author";
    bookTitle.classList.add("author")
    
    const pageCount = document.createElement("p");
    pageCount.textContent = 123;
    bookTitle.classList.add("pageCount")

    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(pageCount);



bookShelf.appendChild(div);