const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating oil schema for json response data from the Oil Prices api to be stored in the mongoDB
const oilSchema = new Schema({
    price: { type: Boolean, required: true},
    formatted: { type: String, required: true},
    currency: { type: String, required: true},
    type: { type: String, required: true},
    created_at: { type: String, required: true}
});

const Oil = mongoose.model("Oil", oilSchema);

module.exports = Oil;