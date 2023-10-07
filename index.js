function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/characters/583")
  .then((resp) => resp.json())
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
then(data => {
  
  renderBooks(data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

document.addEventListener('DOMContentLoaded', fetchBooks);


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
