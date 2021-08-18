const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    countryCode: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    },
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;