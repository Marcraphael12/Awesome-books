class BookList {
  constructor() {
    this.list = [];
  }

  addBook(book) {
    this.list.push(book);
    localStorage.setItem('books', JSON.stringify(this.list));
    this.displayBooks();
  }

  removeBook(id) {
    this.list = this.list.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.list));
    this.displayBooks();
  }

  displayBooks() {
    const result = document.querySelector('.result');
    result.innerHTML = '';
    this.list.forEach((book) => {
      result.appendChild(this.bookElement(book));
    });
  }

  bookElement(book) {
    const li = document.createElement('li');
    li.classList.add('book-container');

    const title = document.createElement('h5');
    title.classList.add('title');
    const author = document.createElement('h5');
    author.classList.add('name');

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');

    removeBtn.addEventListener('click', () => this.removeBook(book.id));
    title.innerText = book.title;
    author.innerText = `by ${book.author}`;
    removeBtn.innerText = 'remove';

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(removeBtn);
    return li;
  }
}

const library = new BookList();

window.addEventListener('load', () => {
  const form = document.querySelector('.books-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('.book-title');
    const author = document.querySelector('.book-author');

    const book = {
      title: title.value || 'Unknow title',
      author: author.value || 'Unknow author',
      id: Date.now(),
    };
    library.addBook(book);
    title.value = null;
    author.value = null;
  });

  const books = localStorage.getItem('books');
  if (books) {
    library.list = JSON.parse(books);
  }
  library.displayBooks();
});
