module.exports = function(router) {
	const path = require('path');
	let Education = require('../models/Education');
	let Bulletin = require('../models/Bulletin');

	router.get('/', (req, res) => {
		res.send('I am here');
	});

	router.get('/educations', (req, res) => {
		console.log('education called');
		Education.find((err, educations) => {
			if (err) return res.send(err);
			res.json({'data': educations});
		});
	});

	router.get('/educations/:educationId', (req, res) => {
		Education.findById(req.params.educationId, (err, education) => {
            if (err) return res.send(err);
            res.json({'data': education});
		});
	});

	router.post('/educations', (req, res) => {
		console.log(req.body);
		let education = new Education(req.body.data);
        console.log(education);
		education.save((err) => {
			if (err) return res.send(err);
			res.status(201).json({"data": education});
		});
	});


	router.get('/bulletins', (req, res) => {
        Bulletin.find((err, bulletins) => {
			if (err) return res.send(err);
			res.json({'data': bulletins});
		});
	});

    router.get('/bulletins/:bulletinId', (req, res) => {
        Bulletin.findById(req.params.bulletinId, (err, bulletin) => {
            if (err) return res.send(err);
            res.json({'data': bulletin});
        });
    });

	router.post('/bulletins', (req, res) => {
		let bulletin = new Bulletin(req.body.data);
        bulletin.save((err) => {
            if (err) return res.send(err);
			res.status(201).json({"data": bulletin});
		});
	});

	return router;
};

