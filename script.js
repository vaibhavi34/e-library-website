document.addEventListener('DOMContentLoaded', function () {
    console.log("Website is ready!");

    // You can add more functionality here if needed
});



let currentIndex = 0; // Track current slide index
const slides = document.querySelectorAll('.carousel-slide'); // Select all slides
const totalSlides = slides.length; // Get the total number of slides

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[index].style.display = 'block';
}

function changeSlide(direction) {
    // Update current index based on direction
    currentIndex += direction;

    // Loop around if we reach the end or start
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Go back to the first slide
    }

    showSlide(currentIndex); // Show the new current slide
}

// Show the first slide initially
showSlide(currentIndex);

// Change slide automatically every 2 seconds
setInterval(() => {
    changeSlide(1); // Change to the next slide
}, 2000);


document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        alert("More details about the book will go here!");
        // You can replace the alert with a function to show more details or navigate to a new page.
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Thank you for your message! We'll get back to you shortly."); // Display a message
    this.reset(); // Reset the form fields
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  // Remove the JWT token from localStorage or sessionStorage
localStorage.removeItem('token');
// Optionally, if you're using sessionStorage instead
// sessionStorage.removeItem('token');

// Redirect to the login page
window.location.href = '/login';

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return res.status(500).send('Error while logging out');
      }
      res.redirect('/login'); // Redirect to login page after logout
  });
});


    // User Properties
var userProperties = PropertiesService.getUserProperties();

// Document Properties
var documentProperties = PropertiesService.getDocumentProperties();


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('homeBtn').addEventListener('click', function() {
  alert('Home button clicked!');
  // You can add more functionality here, like navigating to a home page
});

document.getElementById('settingsBtn').addEventListener('click', function() {
  alert('Settings button clicked!');
  // Add your settings functionality here
});

document.getElementById('profileBtn').addEventListener('click', function() {
  alert('Profile button clicked!');
  // Add your profile functionality here
});

// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/elib', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// backend/models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    isbn: { type: String, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
// backend/routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new book
router.post('/', async (req, res) => {
    const newBook = new Book(req.body);
    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;


// frontend/script.js
const API_URL = 'http://localhost:5000/api/books';

document.addEventListener('DOMContentLoaded', () => {
    loadBooks();

    document.getElementById('book-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;
        const isbn = document.getElementById('isbn').value;

        await addBook({ title, author, year, isbn });
        loadBooks();
    });
});

async function loadBooks() {
    const response = await fetch(API_URL);
    const books = await response.json();
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.textContent = `${book.title} by ${book.author} (${book.year}) - ISBN: ${book.isbn}`;
        bookList.appendChild(bookItem);
    });
}

async function addBook(book) {
    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    });
    document.getElementById('book-form').reset();
}
