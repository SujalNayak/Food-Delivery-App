const { default: mongoose } = require("mongoose");

const restoModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export const restoSchema =
    mongoose.models.restaurants || mongoose.model("restaurants", restoModel);
