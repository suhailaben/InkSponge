let myLibrary = [];
let palette = ['f94144', 'f3722c', 'f8961e', 'f9844a', 'f9c74f', '90be6d', '43aa8b', '4d908e', '577590', '277da1'];

class Book {
    constructor(title, author, pages, read, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.genre = genre;
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

function updateDisplayInit() {
    const collection = document.querySelector(".collection");

    for (let element of myLibrary) {
        let node = document.createElement('div');
        node.style.backgroundColor = `#${element.color}`;
        let content = document.createTextNode(`${element.title} by ${element.author}`)
        node.appendChild(content);
        collection.appendChild(node);
    }
}

let hP = new Book('Harry Potter', 'Rowling', 300, true, 'Fantasy');
let lOTR = new Book('Lord of the Rings', 'Tolkien', 400, false, 'Fantasy');

addBookToLibrary(hP);
addBookToLibrary(lOTR);

updateDisplayInit()

function toggleForm() {
    let formy = document.getElementById('theForm');
    formy.style.display = formy.style.display == "none" ? "grid" : "none";
}

document.getElementById('theButton').addEventListener('click', toggleForm);

const theForm = document.querySelector('form')
theForm.onsubmit = function() {
    event.preventDefault()
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let genre = document.getElementById('genre').value;
    let read = document.getElementById('read').value;

    let userBook = new Book(title, author, pages, genre, read);
    addBookToLibrary(userBook);
    updateDisplay();

    function updateDisplay() {
        const collection = document.querySelector(".collection");
        let node = document.createElement('div');
        node.style.backgroundColor = `#${userBook.color}`;
        let content = document.createTextNode(`${userBook.title} by ${userBook.author}`)
        node.appendChild(content);
        collection.appendChild(node);
    }
}

