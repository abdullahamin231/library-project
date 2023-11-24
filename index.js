const form = document.getElementById('form');
const modal = document.getElementById("modal");
const library = [];
const booksContainer = document.getElementById('books-container');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

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
    for(let i = 0; i < 1; i++){
        var div = document.createElement("div");
        var titleTag = document.createElement("p");
        var authorTag = document.createElement("p");
        var pagesTag = document.createElement("p");
        var readBtn = document.createElement("button");
        var removeBtn = document.createElement("button");

        // Assuming you have content to add to each element
        titleTag.textContent = library[i].title;
        authorTag.textContent = library[i].author;
        pagesTag.textContent = library[i].pages;
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute("id", "remove-btn");
        if(library[i].read == true)
            readBtn.textContent = "Read";
        else
            readBtn.textContent = "Unread";
            readBtn.setAttribute("id", "read-btn");

        // Append elements to div
        div.appendChild(titleTag);
        div.appendChild(authorTag);
        div.appendChild(pagesTag);
        div.appendChild(readBtn);
        div.appendChild(removeBtn);

        // Now, 'div' contains all the created elements as its children
        div.classList.add('book');

        booksContainer.appendChild(div);        
    }
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
    
});


function addBook(){
    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
}