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

addBookToLibrary("Aiu", "Pogi", 2, true);
addBookToLibrary("Irine", "Gwapa", 2, true);

console.log(myLibrary);