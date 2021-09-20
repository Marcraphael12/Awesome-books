const author = document.querySelector('.author');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const here = document.querySelector('.here');
const container = document.querySelector('.container');

add.addEventListener('click', ev => {
  const library = document.createElement('div');
  const remove = document.createElement('button');
  remove.setAttribute('type', 'button');
  remove.innerHTML = 'delete';
  remove.addEventListener('click', ev => {
    container.removeChild(library);
  });

  library.innerHTML = `Book's author and name`;
  library.appendChild(remove)
  container.insertBefore(library, here);
});
