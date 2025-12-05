
const { Schema, model } = require("mongoose");

const PositionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };