import mongoose from 'mongoose';

const appointmentschema= mongoose.Schema({
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    Task: String,
    date: String,
    Time: String,
})


var appointmentData = mongoose.model('appointmentData',appointmentschema );

export default appointmentData;