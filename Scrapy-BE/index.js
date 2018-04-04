const mongoose = require('mongoose');
const express = require('express')
const app = express();

const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const start = require('./routes');

// Load environment variables from .env file
dotenv.load();
var DB_URL = process.env.DB || 'mongodb://localhost/local-app';
//connect database
mongoose.connect(DB_URL, {
	autoIndex: false //globally false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("we're connected!");
});


app.set('port', process.env.PORT || 3000);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));



app.use('/api', start);
app.listen(app.get('port'), function () {
	console.log('listening on port ' + app.get('port'));
});