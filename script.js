let myLibrary = [];
let palette = ['f94144', 'f3722c', 'f8961e', 'f9844a', 'f9c74f', '90be6d', '43aa8b', '4d908e', '577590', '277da1'];
let formStatus = false;
class Book {
    constructor(title, author, pages, genre, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.genre = genre;
        this.color = palette[Math.floor(Math.random() * 10)];
    }
    readTheBook() {
        if (this.read === 'unread') {
            this.read = 'read';
        } else {
            this.read = 'unread';
        }
    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function addBookToLibrary(yourBook) {
    myLibrary.unshift(yourBook);
}
function updateDisplay() {
    const collection = document.querySelector(".collection");
    removeAllChildNodes(collection);
    for (i = 0; i < myLibrary.length; i++) {
        let element = myLibrary[i];
        let node = document.createElement('div');
        node.setAttribute('data-index', i);
        node.style.backgroundColor = `#${element.color}`;
        let first = document.createElement('h3');
        first.textContent = `${element.title} by ${element.author}`;
        node.appendChild(first);
        let second = document.createElement('p');
        second.textContent = `Pages: ${element.pages}`;
        node.appendChild(second);
        let third = document.createElement('p');
        third.textContent = `Genre: ${element.genre}`;
        node.appendChild(third);
        let fourth = document.createTextNode(`Status: ${element.read}`);
        node.appendChild(fourth);
        let bottom = document.createElement('div');
        let done = document.createElement('img');
        done.setAttribute('src', 'assets/done.png');
        done.setAttribute('class', 'done');
        done.setAttribute('data-index', i);
        let trash = document.createElement('img');
        trash.setAttribute('src', 'assets/trash.png');
        trash.setAttribute('class', 'trash');
        trash.setAttribute('data-index', i);
        bottom.appendChild(done);
        bottom.appendChild(trash);
        node.appendChild(bottom);
        collection.appendChild(node);
    }
    let trash = document.querySelectorAll('.trash');
    trash.forEach((element) => {
        element.addEventListener('click', () => removeBook(element));
        })
    let done = document.querySelectorAll('.done');
    done.forEach((element) => {
        element.addEventListener('click', () => changeBookStatus(element));
        })
}
let sule = new Book('Elantris', 'Brandon Sanderson', 590, 'Fantasy', 'read');
let dobrev = new Book('I Am a Doloken', 'Maslamah Ben-Ghaly', 950, 'Non-Fiction', 'read');
addBookToLibrary(dobrev);
addBookToLibrary(sule);
updateDisplay();
function toggleForm() {
    let formy = document.getElementById('theForm');
    if (!formStatus) {
        formy.style.display = 'grid';
        formStatus = true;
    } else {
        formy.style.display = 'none';
        formStatus = false;
    }
}
document.getElementById('theButton').addEventListener('click', toggleForm);
const theForm = document.querySelector('form')
theForm.onsubmit = function() {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let genre = document.getElementById('genre').value;
    let read = document.getElementById('read').value;

    let userBook = new Book(title, author, pages, genre, read);
    addBookToLibrary(userBook);
    updateDisplay();
}
function removeBook(element) {
    let toBeRemoved = element.getAttribute('data-index');
    myLibrary.splice(toBeRemoved, 1);
    updateDisplay();
}
function changeBookStatus(element) {
    let toBeChanged = element.getAttribute('data-index');
    console.log(toBeChanged);
    myLibrary[toBeChanged].readTheBook();
    updateDisplay();
}
