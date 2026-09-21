const express = require('express');

const app = express();
const port = 3000;

// Configure template engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {
    res.render('index', {
        title: 'User Registration',
        error: null,
        user: null
    });
});

// Accept form inputs
app.post('/register', (req, res) => {
    const { username, age } = req.body;

    let errorMessage = null;

    // Basic validation
    if (!username || username.length < 3) {
        errorMessage = 'Username must be at least 3 characters long.';
    }
    else if (!age || age < 18) {
        errorMessage = 'You must be at least 18 years old.';
    }

    // If validation fails
    if (errorMessage) {
        res.render('index', {
            title: 'Registration Failed',
            error: errorMessage,
            user: null
        });
    }
    else {
        // If validation succeeds
        res.render('index', {
            title: 'Registration Successful',
            error: null,
            user: username
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});