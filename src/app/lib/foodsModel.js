const { default: mongoose } = require("mongoose");

const foodsModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img_path: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    resto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurants",
        required: true,
    },
});

export const foodsSchema = mongoose.models.foods || mongoose.model("foods", foodsModel);