//Logic for adding books

let myLibrary = [];

function Book(title, author, pages, rating) {
    this.title = title
    this.author = author
    this.pages = pages
    this.rating = rating
}

function addBook() {
    let book = new Book(title, author, pages, rating);
    let entryName = book.title;
    myLibrary.push(entryName);
}

//Logic for form to add a book
const addBtn = document.getElementById('add');
const form = document.getElementById('pop-up')
addBtn.addEventListener('click', displayForm)

function displayForm() {
    form.style.display = 'block';
}