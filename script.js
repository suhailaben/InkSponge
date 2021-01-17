let myLibrary = [];
let palette = ['f94144', 'f3722c', 'f8961e', 'f9844a', 'f9c74f', '90be6d', '43aa8b', '4d908e', '577590', '277da1'];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.color = palette[Math.floor(Math.random() * 10)];
    }
    readTheBook() {
        if (this.read === false) {
            this.read = true;
        } else {
            this.read = false;
        }
    }
}

function addBookToLibrary(yourBook) {
    myLibrary.push(yourBook);
}

function updateDisplay() {
    const collection = document.querySelector(".collection");

    for (let element of myLibrary) {
        let node = document.createElement('div');
        node.style.backgroundColor = `#${element.color}`;
        let content = document.createTextNode(`${element.title} by ${element.author}`)
        node.appendChild(content);
        collection.appendChild(node);
    }
}

let hP = new Book('Harry Potter', 'Rowling', 300, true);
let lOTR = new Book('Lord of the Rings', 'Tolkien', 400, false);

addBookToLibrary(hP);
addBookToLibrary(lOTR);

updateDisplay()

function toggleForm() {
    let formy = document.getElementById('theForm');
    formy.style.display = formy.style.display == "none" ? "grid" : "none";
}

document.getElementById('theButton').addEventListener('click', toggleForm);
