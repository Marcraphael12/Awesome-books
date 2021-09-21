class BookList {
  constructor() {
    this.list = [];
  }

	addBook(book) {
	this.list.push(book);
	localStorage.setItem('books', JSON.stringify(this.list));
	this.displayBooks();
}

});
