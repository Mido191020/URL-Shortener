const express = require('express');
const urlController=require('../Controllers/URLcontroller');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'); // Ensure you have a Pug template named 'home.pug'
});

// Handle URL shortening
router.post('/shorten', urlController.ShortURL);

router.get('/result/:shortUrl', urlController.DisplayShortURL);

router.get('/:shortUrl', urlController.Redirect);
module.exports = router;

