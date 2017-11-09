module.exports = function(router) {
	const path = require('path');
	let Education = require('../models/Education');
	let MarketPost = require('../models/MarketPost');

	router.get('/', (req, res) => {
		res.send('I am here');
	});

	router.get('/educations', (req, res) => {
		console.log('education called');
		Education.find((err, educations) => {
			if (err) res.send(err);
			res.json({'data': educations});
		});
	});

	router.post('/educations', (req, res) => {
		console.log(req.body);
		let education = new Education(req.body.data);
        console.log(education);
		education.save((err) => {
			if (err) res.send(err);
			res.status(201).json({"data": education});
		});
	});


	router.get('/marketposts', (req, res) => {
		MarketPost.find((err, marketposts) => {
			if (err) res.send(err);
			res.json({'data': marketposts});
		});
	});

	router.post('/marketposts', (req, res) => {
		let marketpost = new MarketPost(req.body);
		marketpost.save((err) => {
			if (err) res.send(err);
			res.status(200).send();
		});
	});

	return router;
};

