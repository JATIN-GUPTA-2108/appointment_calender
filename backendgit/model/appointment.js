import mongoose from 'mongoose';

const appointmentschema= mongoose.Schema({
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    task: String,
    date: String,
    time: String,
})


var appointmentData = mongoose.model('appointmentData',appointmentschema );

export default appointmentData;