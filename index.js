const express = require('express');
const path = require('path');
const db = require('./db/db');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));
// Middleware
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/', require('./models/index'));
app.use('/users', require('./models/users'));
app.use('/status', require('./models/status'));
app.use('/by-id', require('./models/id'));
app.use('/by-login', require('./models/login'));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
