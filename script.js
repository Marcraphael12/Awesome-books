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
	const result = document.getElementById('Result');
	this.list.forEach((book) => {
		result.appendChild(this.bookElement(book));
	});
}

bookElement(book) {
  const li = document.createElement('li');
  const title = document.createElement('h4');
  const author = document.createElement('h4');
  const removeBtn = document.createElement('button');
  removeBtn.addEventListener('click', () => this.removeBook(book.id));
  title.innerText = `Book's title: ${book.title}`;
  author.innerText = `Author's name: ${book.author}`;
  removeBtn.innerText = 'remove';
  title.classList.add('title');
  li.appendChild(title);
  li.appendChild(author);
  li.appendChild(removeBtn);
  return li;
  }
}

});
