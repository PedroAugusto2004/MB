const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Added CORS middleware
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS middleware
app.use(cors());  // Added CORS middleware

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.htm'));
});

// Handle sign-in form submission
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Logic to handle sign-in (e.g., check credentials in a database)
  if (email === 'test@example.com' && password === 'password') {
    res.json({ status: 'success', message: 'Login successful!' });
  } else {
    res.json({ status: 'error', message: 'Invalid email or password' });
  }
});

// Handle sign-up form submission
app.post('/signup', (req, res) => {
  const { name, email, password, dob, phone, country, gender, terms } = req.body;

  // Logic to handle sign-up (e.g., save user to a database)
  res.json({ status: 'success', message: 'Account created successfully!' });
});

// Handle forgot password form submission
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  // Logic to handle password reset (e.g., send email)
  res.json({ status: 'success', message: 'Password reset link sent!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
