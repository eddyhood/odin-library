 
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

const addBtn = document.getElementById('add');
const form = document.getElementById('pop-up');
const cross = document.getElementById('cross');
addBtn.addEventListener('click', displayForm);
cross.addEventListener('click', closeForm);
form.addEventListener('submit', e => getData(e));



function getData(e) {
    // let bookTitle = document.getElementById('title');
    // let bookAuthor = document.getElementById('author');
    // let bookPages = document.getElementById('pages')
    e.preventDefault();
    let title = (e.target.elements['title'].value)
    let author = (e.target.elements['author'].value)
    let pages = (e.target.elements['pages'].value)
    let rating = (e.target.elements['rating'].value)
    console.log(title, author, pages, rating)


    

};

//Logic top open and close form
function displayForm() {
    form.style.display = 'block';
};

function closeForm() {
    form.style.display = 'none';
};
