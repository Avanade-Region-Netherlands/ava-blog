/**
 * Loads environment variables from a .env file.
 * @requires dotenv
 */
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');	

app.use('/', require('./server/routes/main'));

/**
 * Starts the server and listens on the specified port.
 * @param {number} port - The port number to listen on.
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});