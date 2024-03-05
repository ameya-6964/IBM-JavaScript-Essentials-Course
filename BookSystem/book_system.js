let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `
    <div class="book"> <h2>Book Name: ${book.name}</h2>  
      <p><strong>Author Name:</strong> ${book.authorName}</p>
      <p><strong>Book Description:</strong> ${book.bookDescription}</p>
      <p><strong>No. of Pages:</strong> ${book.pagesNumber}</p> 
    </div>
    `).join(''); // Join array elements into a single string
    document.getElementById('books').innerHTML = booksDiv; 
}





function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}