const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scrapySchema = new Schema({
    keyword: String,
    images: [String]        
}, {
    versionKey: false
});

module.exports = mongoose.model('Scrapy', scrapySchema);