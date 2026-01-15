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
};

addBookToLibrary("The Hobbit", "J.R.R. Tolken", 1000);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolken", 2000);
addBookToLibrary("The Shinning", "Stephen King", 800);
addBookToLibrary("IT", "Stephen King", 999)

function createBookDiv (array) {
    array.forEach((item) => {
        const bookShelf = document.querySelector(".bookShelf");
        const div = document.createElement("div");
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = item.title;
        bookTitle.classList.add("bookTitle")
        
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `by ${item.author}`;
        bookTitle.classList.add("author")
        
        const pageCount = document.createElement("p");
        pageCount.textContent = `${item.pageNumber} pages`;
        bookTitle.classList.add("pageCount")

        const uid = document.createElement("p");
        uid.textContent = `UUID: ${item.id}`;
        uid.classList.add("id");

        div.appendChild(bookTitle);
        div.appendChild(bookAuthor);
        div.appendChild(pageCount);
        div.appendChild(uid);

        bookShelf.appendChild(div);
        
        }
    )
};

createBookDiv(myLibrary)