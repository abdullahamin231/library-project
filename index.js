const form = document.getElementById('form');
const modal = document.getElementById("modal");
let library = [];
const booksContainer = document.getElementById('books-container');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function getBooksfromLocalStorage(){
    const gottenBooks = localStorage.getItem("books");
    if(gottenBooks){
        library = JSON.parse(gottenBooks);
    }
}

getBooksfromLocalStorage();

function addBookToLibrary(book) {
    library.push(book);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const newBook = new book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();      
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
    }
);

function displayBooks(){
    booksContainer.innerHTML = "";

    for (let i = 0; i < library.length; i++) {
        var div = document.createElement("div");
        var titleTag = document.createElement("p");
        var authorTag = document.createElement("p");
        var pagesTag = document.createElement("p");
        var readBtn = document.createElement("button");
        var removeBtn = document.createElement("button");

        titleTag.textContent = library[i].title;
        authorTag.textContent = library[i].author;
        pagesTag.textContent = library[i].pages;
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute("id", "remove-btn");
        removeBtn.setAttribute("data-index", i); // Add data-index attribute to store the index of the book
        removeBtn.addEventListener("click", removeBook); // Add click event listener

        if (library[i].read == true)
            readBtn.textContent = "Read";
        else
            readBtn.textContent = "Unread";
        readBtn.setAttribute("data-index", i); // Add data-index attribute to store the index of the book
        readBtn.addEventListener("click", doTheRead);
        readBtn.setAttribute("id", "read-btn");

        div.appendChild(titleTag);
        div.appendChild(authorTag);
        div.appendChild(pagesTag);
        div.appendChild(readBtn);
        div.appendChild(removeBtn);

        div.classList.add('book');
        booksContainer.appendChild(div);
    }

    localStorage.setItem("books", JSON.stringify(library));
}

displayBooks();

function addBook(){
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
}

function doTheRead(event) {
    const index = event.target.getAttribute("data-index");
    const currentBook = library[index];
    currentBook.read = !currentBook.read; // Toggle the 'read' property
    displayBooks(); // Update the displayed books
}

function removeBook(event) {
    const index = event.target.getAttribute("data-index");
    library.splice(index, 1); // Remove the book from the library array
    displayBooks(); // Update the displayed books
}