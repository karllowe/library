const myLibrary = [];

function Book(title, author, pageNumber, read) {
    if (!new.target) {
        throw Error("Use the 'new' operator!")
    };
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.id = crypto.randomUUID();
    this.read = read;
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pageNumber, read) {
    const newBook = new Book(title, author, pageNumber, read);
    const bookShelf = document.querySelector(".bookShelf");

    const div = document.createElement("div");
    div.setAttribute("data-uid",newBook.id);

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = newBook.title;
    bookTitle.classList.add("bookTitle");
    
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `by ${newBook.author}`;
    bookAuthor.classList.add("author")
    
    const pageCount = document.createElement("p");
    pageCount.textContent = `${newBook.pageNumber} pages`;
    pageCount.classList.add("pageCount")

    const uid = document.createElement("p");
    uid.textContent = `UUID: ${newBook.id}`;
    uid.classList.add("id");

    const delButton = document.createElement("button");
    delButton.classList.add("delButton");
    delButton.textContent = "Delete";

    const readButton = document.createElement("button");
    readButton.classList.add("readButton");
    readButton.textContent = "Mark read";

    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(pageCount);
    div.appendChild(uid);
    div.appendChild(delButton);
    div.appendChild(readButton);

    bookShelf.appendChild(div);
    myLibrary.push(newBook);
};

function deleteBook(idLookUp) {
    const index = myLibrary.findIndex((item) => item.id==idLookUp);
    myLibrary.splice(index,1);

    const divToRemove = document.querySelectorAll(`[data-uid="${idLookUp}"]`)[0];
    divToRemove.remove();
};

addBookToLibrary("The Hobbit", "J.R.R. Tolken", 1000);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolken", 2000);
addBookToLibrary("The Shinning", "Stephen King", 800);
addBookToLibrary("IT", "Stephen King", 999);

const newBookWindow = document.querySelector("dialog");
const showButton = document.querySelector("#newBook");
const closeWindow = document.querySelector("#close");
const submitButton = document.querySelector("#submitButton");
const delButton = document.querySelectorAll(".delButton");
const readButton = document.querySelectorAll(".readButton");

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
    const pages = formData.get("pages");

    addBookToLibrary(title, author, pages);
    newBookWindow.close();
    form.reset();
});

delButton.forEach((item) => {
    item.addEventListener("click", (e) => {
        const bookId = e.target.parentElement.dataset.uid;
        deleteBook(bookId);
    })
});

readButton.forEach((item) => {
    item.addEventListener("click", (e) => {
        const bookId = e.target.parentElement.dataset.uid;
        const index = myLibrary.findIndex((item) => item.id==bookId);
        const bookItm = myLibrary[index];
        bookItm.toggleRead();
        console.log(myLibrary)
    })
});

