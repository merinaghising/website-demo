const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
    appointmentDate: { type: Date, required: true },
    status: { type: String, enum: ['Scheduled', 'Rescheduled', 'Canceled'], default: 'Scheduled' },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
