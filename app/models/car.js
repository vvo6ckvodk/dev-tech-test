const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
        min: 1900,
        max: new Date().getFullYear()
    },
});

schema.set('toJSON', {
    transform: (doc, data) => {
        data.id = data._id.toString();

        delete data._id;
    },
});

export default mongoose.model('Car', schema);
