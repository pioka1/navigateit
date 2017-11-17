const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BulletinSchema = new Schema({
    type: String,
    attributes: {
        publisher: {
            category: String,
            name: String
        },
        title: String,
        description: String,
        contact: {
            name: String,
            position: String,
            email: String,
            phone: String
        },
        educations: [Schema.Types.ObjectId],
        expires: Date,
        posted: { type: Date, default: Date.now }
    }
});

module.exports = mongoose.model('Bulletin', BulletinSchema);