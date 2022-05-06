 //user interface
const addBtn = document.getElementById('add');
const emptyBtn = document.getElementById('empty');
const form = document.getElementById('pop-up');
const cross = document.getElementById('cross');
addBtn.addEventListener('click', displayForm);
emptyBtn.addEventListener('click', eraseLibrary);
cross.addEventListener('click', closeForm);
form.addEventListener('submit', e => getData(e));


//Logic for adding books

let myLibrary = [];
let storedLibrary = window.localStorage.getItem('library');

function Book(title, author, pages, rating) {
    this.title = title
    this.author = author
    this.pages = pages
    this.rating = rating
};

function addBook() {
    let book = new Book(title, author, pages, rating);
    let entryName = book.title;
    myLibrary.push(entryName);
};

function getData(e) {
    // e.preventDefault();
    let title = (e.target.elements['title'].value);
    let author = (e.target.elements['author'].value);
    let pages = (e.target.elements['pages'].value);
    let rating = (e.target.elements['rating'].value);

    let book = new Book(title, author, pages, rating);
    addBookToLibrary(book);
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    window.localStorage.setItem('library', JSON.stringify(myLibrary));
};

//Logic top open and close form
function displayForm() {
    form.style.display = 'block';
};

function closeForm() {
    form.style.display = 'none';
};

//Logic to remove items

function eraseLibrary() {
    myLibrary = [];
    storedLibrary = null;
    window.localStorage.removeItem('library');
    displayBooks();
};


//Add library books to webpage display
function displayBooks() {
    //convert JSON library back to array of objects
    const bookList = JSON.parse(storedLibrary);

    const main = document.getElementById('card-main');

    if(bookList) {
        bookList.forEach(o => {
            const card = document.createElement('p');
            const title = document.createTextNode(o.title);
            const author = document.createTextNode(o.author);
            const pages = document.createTextNode(o.pages);
            const rating = document.createTextNode(o.rating);
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(pages);
            card.appendChild(rating);
            card.classList.add('libraryCard');
            main.appendChild(card);
    })      
    } else {
        main.textContent = '';
        }
};

displayBooks();
console.log(storedLibrary)