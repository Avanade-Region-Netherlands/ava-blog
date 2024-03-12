const express = require('express');	
const router = express.Router();

router.use(express.static('public'));

/**
 * Handles GET requests to the root URL.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/', (req, res) => {
  const locals = {
    title: "AVA Blog",
    description: "A simple blog application using Node.js, Express, and Ejs."
  }
  res.render('index', locals);
});

/**
 * Handles GET requests to the about page.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

module.exports = router;