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
let storedLibrary = JSON.parse(window.localStorage.getItem('library'));

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
    const fullLibrary = (storedLibrary) ? storedLibrary.concat(myLibrary) : myLibrary;
    window.localStorage.setItem('library', JSON.stringify(fullLibrary));
    displayBooks();
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
    const bookList = JSON.parse(window.localStorage.getItem('library'));

    const main = document.getElementById('card-main');

    if(bookList) {
        bookList.forEach(o => {
            const card = document.createElement('div');

            //title
            const titleStyle = document.createElement('h3');
            const titleName = document.createTextNode(o.title);
            titleStyle.appendChild(titleName);
            card.appendChild(titleStyle);

            //author
            const authorStyle = document.createElement('p');
            const authorName = document.createTextNode('Author Name: ' + o.author);
            authorStyle.appendChild(authorName);
            card.appendChild(authorStyle);

            //pages
            const pagesStyle = document.createElement('p');
            const pagesName = document.createTextNode('Page Count: ' + o.pages);
            pagesStyle.appendChild(pagesName);
            card.appendChild(pagesName);

            //Rating
            const ratingStyle = document.createElement('p');
            const ratingName = document.createTextNode('Rating: ' + o.rating);
            ratingStyle.appendChild(ratingName);
            card.appendChild(ratingStyle);


            card.classList.add('libraryCard');
            main.appendChild(card);
    })      
    } else {
        main.textContent = '';
        }
};

displayBooks();