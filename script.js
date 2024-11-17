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
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        const titleElement = document.createElement("div");
        titleElement.classList.add("title");
        const authorElement = document.createElement("div");
        authorElement.classList.add("author");
        const pagesElement = document.createElement("div");
        pagesElement.classList.add("pages")
        const readDivElement = document.createElement("div");
        readDivElement.classList.add("read");
        const readBtnElement = document.createElement("button");
        readBtnElement.classList.add("read-status");
        const deleteDivElement = document.createElement("div");
        deleteDivElement.classList.add("delete");
        const deleteBtnElement = document.createElement("button");
        deleteBtnElement.classList.add("delete-btn") //create elements and add their classes

        divContainer.appendChild(cardElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(authorElement);
        cardElement.appendChild(pagesElement);
        cardElement.appendChild(readDivElement);
        readDivElement.appendChild(readBtnElement);
        cardElement.appendChild(deleteDivElement);
        deleteDivElement.appendChild(deleteBtnElement); //add elements to dom;

        titleElement.textContent = book.title;
        authorElement.textContent = `by ${book.author}`;
        pagesElement.textContent = `${book.pages} pages`;
        readBtnElement.textContent = book.readStatus ? "Read" : "Not Read";
        deleteBtnElement.textContent = "Remove"; //add contents to the elements 
    })
}

addBookToLibrary("Aiu", "Ngano Poor", 69, true);
addBookToLibrary("Irine", "Gwapa", 69, false);
addBookToLibrary("test", "tester", 69, false);
addBookToLibrary("gwa", "po", 69, true);

displayBooks();