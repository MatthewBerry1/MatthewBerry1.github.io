const express = require('express');
const app = express();
const port = 5000;
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});


require('dotenv').config();
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/registration', (req, res) => {
    res.render('registration');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const bcrypt = require('bcrypt');
const saltRounds = 10;

const plaintextPassword = 'user_password';
bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
    if (err) {
        return;
    }
});