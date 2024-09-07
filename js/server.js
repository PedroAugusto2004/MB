const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt'); // For password hashing

const app = express();
const PORT = 3000;

// Set up Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Define a User model
const User = sequelize.define('User', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  dob: Sequelize.DATE,
  phone: Sequelize.STRING,
  country: Sequelize.STRING,
  gender: Sequelize.STRING
});

// Sync the database
sequelize.sync();

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS middleware
app.use(cors());

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.htm'));
});

// Handle sign-in form submission
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({ status: 'success', message: 'Login successful!' });
    } else {
      res.json({ status: 'error', message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// Handle sign-up form submission
app.post('/signup', async (req, res) => {
  const { name, email, password, dob, phone, country, gender, terms } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      dob,
      phone,
      country,
      gender
    });

    res.json({ status: 'success', message: 'Account created successfully!' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
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
