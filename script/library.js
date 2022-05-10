//Global variables
const libraryDisplay = document.getElementById('card-main');

//Logic to change form display------------------------------
const form = document.getElementById('pop-up');

//Add
const seeFormBtn = document.getElementById('add');
seeFormBtn.addEventListener('click', displayForm);

function displayForm() {
    form.style.display = 'block';
};

//Hide
const hideFormBtn = document.getElementById('cross');
hideFormBtn.addEventListener('click', hideForm);

function hideForm() {
    form.style.display = 'none';
};


//logic to delete local storage-------------------------------
const eraseLibraryBtn = document.getElementById('empty');
const library = document.getElementById('')
eraseLibraryBtn.addEventListener('click', clearStorage);
function clearStorage() {
    //clear storage
    window.localStorage.clear();
    //clear DOM
    while(libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.firstChild);
    }
};

//Logic to get user input-------------------------------------
form.addEventListener('submit', (e) => getBookData(e));

function getBookData(e) {
    // e.preventDefault();
    let title = (e.target.elements['title'].value);
    let author = (e.target.elements['author'].value);
    let pages = (e.target.elements['pages'].value);
    let rating = (e.target.elements['rating'].value);
    let book = new CreateBook(title, author, pages, rating);
    storeToMemory(title, book);
};

//Logic to create books----------------------------------------
function CreateBook(title, author, pages, rating){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
};

//Logic to manage local storage--------------------------------

function storeToMemory(key, book){
    window.localStorage.setItem(key, JSON.stringify(book));
};


//Logic to display library
function showBooks() {
    const main = document.getElementById('card-main');
    const keys = Object.keys(localStorage);
    let i = 0;

    for(let key of keys){
        let book = JSON.parse(window.localStorage.getItem(key));

        const card = document.createElement('div');

         //delete button
         const deleteBtn = document.createElement('i');
         deleteBtn.classList.add('flaticon-cross');
         card.appendChild(deleteBtn);
         
         //title
         const titleStyle = document.createElement('h3');
         titleStyle.classList.add('book-title')
         const titleName = document.createTextNode(book.title);
         titleStyle.appendChild(titleName);
         card.appendChild(titleStyle);
         
         //author
         const authorStyle = document.createElement('p');
         const authorName = document.createTextNode('Author Name: ' + book.author);
         authorStyle.appendChild(authorName);
         card.appendChild(authorStyle);
         
         //pages
         const pagesStyle = document.createElement('p');
         const pagesName = document.createTextNode('Page Count: ' + book.pages);
         pagesStyle.appendChild(pagesName);
         card.appendChild(pagesName);
         
         //Rating
         const ratingStyle = document.createElement('p');
         const ratingName = document.createTextNode('Rating: ' + book.rating);
         ratingStyle.appendChild(ratingName);
         card.appendChild(ratingStyle);

          //Position
          const position = i;
          const addPosition = card.setAttribute('id', i);
          i++;

        card.classList.add('libraryCard');
        main.appendChild(card);

    };
 
};

showBooks()


//Logic to delete individual books------------------------
const deleteBook = document.querySelectorAll('.flaticon-cross');


deleteBook.forEach(deleteBook => {
    deleteBook.addEventListener('click', () => {
        const key = deleteBook.nextSibling.innerText;
        const delted =  window.localStorage.removeItem(key);
        deleteBook.parentElement.remove();
    });
});
