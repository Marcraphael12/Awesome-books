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

});
