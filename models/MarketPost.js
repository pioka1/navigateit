const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MarketPostSchema = new Schema({
    company: String,
    title: String,
    description: String,
    educations: [Schema.Types.ObjectId],
    posted: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MarketPost', MarketPostSchema);