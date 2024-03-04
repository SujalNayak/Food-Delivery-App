const { default: mongoose } = require("mongoose");

const restoModel = new mongoose.Schema({
    name: String,
});

export const restoSchema =
    mongoose.models.restaurants || mongoose.model("restaurants", restoModel);
