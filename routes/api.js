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

			if (bulletins.length) {
                // Handle include query parameter
                if (req.query.include === 'educations') {

                    let primaryLock = 0;

                    for (let i = 0; i < bulletins.length; i++) {
                        let educations = bulletins[i].attributes.educations;

                        let promiseloop = new Promise((resolve, reject) => {
                            let list = [];
                            for (let j = 0; j < educations.length; j++) {
                                Education.findById(educations[j]).then(function (doc) {
                                    list.push(doc);
                                    console.log(list.length);
                                    if (list.length === educations.length) resolve(list);
                                });
                            }
                        });

                        promiseloop.then(function (array) {
                            //console.log(array);
                            console.log("for bulletins");
                            console.log(bulletins[i]);

                            let rel_edu_data_array = [];
                            for (let i = 0; i < array.length; i++) {
                                rel_edu_data_array.push({"id": array[i]._id, "type": "education"});
                            }

                            bulletins[i] = {
                                "_id": bulletins[i]._id,
                                "type": bulletins[i].type,
                                "attributes": {
                                    "publisher": bulletins[i].attributes.publisher,
                                    "contact": bulletins[i].attributes.contact,
                                    "posted": bulletins[i].attributes.posted,
                                    "expires": bulletins[i].attributes.expires,
                                    "description": bulletins[i].attributes.description,
                                    "title": bulletins[i].attributes.title
                                },
                                "relationships": {
                                    "educations": {
                                        "data": rel_edu_data_array
                                    }
                                }
                            };
                            //console.log(bulletins[i]);
                            if ( ++primaryLock === bulletins.length) {
                                return res.json({"data": bulletins, "included": array});
                            }
                        });
                    }
                    console.log("done");
                } else {
                    res.json({'data': bulletins});
                }
			} else {
                res.json({'data': []});
			}


		});
	});

    router.get('/bulletins/:bulletinId', (req, res) => {
        Bulletin.findById(req.params.bulletinId, (err, bulletin) => {
            if (err) return res.send(err);
            res.json({'data': bulletin});
        });
    });

	router.post('/bulletins', (req, res) => {

		// Prepare JSON object
		let data = req.body.data;
		let bulletin_obj = {
			type: data.type,
			attributes: data.attributes
		};

		// Add foreign IDs for educations
		let educations = [];
		for (let i = 0; i < data.relationships.educations.data.length; i++) {
			let id = data.relationships.educations.data[i].id;
            educations.push(id);
        }
        bulletin_obj.attributes.educations = educations;

		// Model with Mongoose
		let bulletin = new Bulletin(bulletin_obj);
        bulletin.save((err) => {
            if (err) return res.send(err);
			res.status(201).json({"data": bulletin});
		});
	});

	return router;
};

