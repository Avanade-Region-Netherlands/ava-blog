/**
 * Loads environment variables from a .env file.
 * @requires dotenv
 */
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

/**
 * Handles GET requests to the root URL.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

/**
 * Starts the server and listens on the specified port.
 * @param {number} port - The port number to listen on.
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});