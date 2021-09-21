let booksCollection = [];
const list = document.querySelector('.list');
const author = document.querySelector('.title');
const name = document.querySelector('.author');

let bookId = 0;

function saveData() {
  const data = JSON.stringify(booksCollection);
  localStorage.setItem('Collection', data);
}

const addBook = () => { // The adding function
  bookId += 1;
  const book = {
    id: bookId,
    title: author.value,
    author: name.value,
  };

  booksCollection.push(book);
  saveData();
};

function getData() {
  if (localStorage.getItem('Collection') !== null) {
		booksCollection = JSON.parse(localStorage.getItem('Collection'));
  } else {
		booksCollection = [];
  }
  return booksCollection;
}

function hidden() {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

const display = () => {
  hidden();
  getData();

  booksCollection.forEach((book) => {
    const remove = document.createElement('input');
		remove.setAttribute('type', 'button')
		remove.setAttribute('value', 'delete');
		remove.classList.add('remove');

    const bookInfos = document.createElement('li');
    bookInfos.innerHTML = `${book.author} <br> ${book.title} <br>`;

    bookInfos.classList.add('li');
    bookInfos.appendChild(remove);
    list.appendChild(bookInfos);
  });
};

const add = document.querySelector('.add');

add.addEventListener('click', () => {
  addBook();
  display();
});

// const removeBook = (BtnEvent) => {
//   const btnId = BtnEvent.target.id;
//   booksCollection = booksCollection.filter((book) => book !== booksCollection[booksCollection.findIndex((b) => b.id === parseInt(btnId, 10))]);
//   localStorage.setItem('Collection', JSON.stringify(booksCollection));
//   window.location.reload();
// };
//
// list.addEventListener('click', (ev) => {
//   if (ev.target.classList.contains('remove')) {
//     removeBook(ev);
//   }
// });

display();
