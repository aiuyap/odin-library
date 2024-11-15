const myLibrary = [];

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(author, title, pages, readStatus) {
    const book = new Book(author, title, pages, readStatus);
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(function(book) {
        const divContainer = document.querySelector("#container");
        const bookContainer = document.createElement("div");
        const bookName = document.createElement("p");
        
        bookContainer.appendChild(bookName);
        divContainer.appendChild(bookContainer);

        bookName.textContent = book.author;
    })
}

addBookToLibrary("Aiu", "Ngano Poor", 69, true);
addBookToLibrary("Irine", "Gwapa", 69, true);
addBookToLibrary("test", "tester", 69, true);
addBookToLibrary("gwa", "po", 69, true);
displayBooks();