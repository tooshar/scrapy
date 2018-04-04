const express = require('express');
const router = express.Router();

const handler = require('../controllers/scrapy');

router.get('/getScrapyData', handler.getScrapyData);
router.post('/getImages', handler.getImages);

module.exports = router;