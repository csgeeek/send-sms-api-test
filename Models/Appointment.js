const mongoose = require('mongoose');

const Appointment = mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    appt: {
        type: String,
    },
    details: {
        type: String,
    },
});

module.exports = mongoose.model('Appointment', Appointment);