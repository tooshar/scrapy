"use strict";

const Scrapy = require('../models/scrapy');
const Jimp = require("jimp");

var Scraper = require('images-scraper'),
	google = new Scraper.Google();

module.exports = {
	async getImages(req, res) {
		try {
			let storedImagesPath = []; //array to be pushed in 'images' field of document

			/* Array initialized earlier to avoid multiple mongodb query of finding and updation */
			for (let i = 0; i < 15; i++) {
				storedImagesPath.push("public/" + req.body.keyword + "/" + req.body.keyword + i + ".jpg");
			};

			let imagesArray = await google.list({
				keyword: req.body.keyword,
				num: 15,
				detail: true
			});

			/* For Convert image to color Grey and Saving to local HDD,
			 * Many web applications allow users to upload files.
			 * When these files are large, or the user is on a slow internet connection,
			 * the upload can take longer than 30 seconds.
			 * For some types of web applications that block requests,
			 *it can result in hitting the H12 request timeout.
			 */
			imagesArray.forEach(async (element, index) => {			

				let lenna = await Jimp.read(element.url);

				lenna.resize(500, 500) // resize
					.quality(60) // set JPEG quality
					.greyscale() // set greyscale
					.write("dist/public/" + req.body.keyword + "/" + req.body.keyword + index + ".jpg"); //Saving to local HDD
			});


			/* Find By keyword field and update it or create a new if not existing*/
			await Scrapy.findOneAndUpdate({
				keyword: req.body.keyword
			}, {
				keyword: req.body.keyword,
				images: storedImagesPath
			}, {
				upsert: true,
				new: true,
				setDefaultsOnInsert: true
			}).lean();

			/* Send back response */
			res.send(imagesArray);

		} catch (error) {
			console.log(error);
		}
	},

	async getScrapyData(req, res) {
		try {
			let getScrapyData = await Scrapy.find(); //Find and return all the documents
			res.json(getScrapyData)
		} catch (error) {
			console.log(error);
		}
	}
}