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
    // (storedLibrary == true) ? myLibrary = storedLibrary : myLibrary = [];

    // let newLibrary = myLibrary.push(book);
    myLibrary.push(book);

    window.localStorage.setItem('library', JSON.stringify(myLibrary));
};

//Logic top open and close form
function displayForm() {
    form.style.display = 'block';
    let library = localStorage.getItem('library');
};

function closeForm() {
    form.style.display = 'none';
};

//Logic to remove items

function eraseLibrary() {
    myLibrary = [];
    window.localStorage.removeItem('library');
};

console.log(storedLibrary)