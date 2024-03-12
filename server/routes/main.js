const express = require('express');	
const router = express.Router();

router.use(express.static('public'));

/**
 * Handles GET requests to the root URL.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = router;