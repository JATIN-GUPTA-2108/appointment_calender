import mongoose from 'mongoose';

const appointmentschema= mongoose.Schema({
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    title: String,
    date: Number,
    time: Number,
})


var appointmentData = mongoose.model('appointmentData',appointmentschema );

export default appointmentData;