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

    const bookShelf = document.querySelector(".bookShelf");
    const div = document.createElement("div");
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = newBook.title;
    bookTitle.classList.add("bookTitle")
    
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `by ${newBook.author}`;
    bookAuthor.classList.add("author")
    
    const pageCount = document.createElement("p");
    pageCount.textContent = `${newBook.pageNumber} pages`;
    pageCount.classList.add("pageCount")

    const uid = document.createElement("p");
    uid.textContent = `UUID: ${newBook.id}`;
    uid.classList.add("id");

    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(pageCount);
    div.appendChild(uid);

    bookShelf.appendChild(div);
};

addBookToLibrary("The Hobbit", "J.R.R. Tolken", 1000);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolken", 2000);
addBookToLibrary("The Shinning", "Stephen King", 800);
addBookToLibrary("IT", "Stephen King", 999)

const newBookWindow = document.querySelector("dialog");
const showButton = document.querySelector("#newBook");
const closeWindow = document.querySelector("#close");
const submitButton = document.querySelector("#submitButton")

showButton.addEventListener("click", () => {
    newBookWindow.showModal()
});

closeWindow.addEventListener("click", () => {
    newBookWindow.close()
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    const formData = new FormData(form);
    const author = formData.get("author");
    const title = formData.get("book_title");
    const pages = formData.get("pages")

    addBookToLibrary(title, author, pages);
});