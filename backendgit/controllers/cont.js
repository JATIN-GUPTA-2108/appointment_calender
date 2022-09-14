import express from 'express';
import mongoose from 'mongoose';

import appointmentData from '../model/appointment.js';

const router = express.Router();

export const getAppointments = async (req, res) => { 
    try {
        const postMessages = await appointmentData.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAppointment = async (req, res) => {
    const { p1,p2 ,  p3 ,p4, Time} = req.body.data;
    console.log(req.body);  
const Task=req.body.data.Task;
// console.log(req.body.Time);
// console.log(req.body.data.Time);

const{date }=req.body
console.log(Task);


    const newPostMessage = new appointmentData({ p1,p2,p3,p4, Task,date , Time})

    try {
        await newPostMessage.save();
            console.log(newPostMessage)
        res.status(201).json(newPostMessage );
    } catch (error) {
        // console.log(error.message)
        res.status(409).json({ message: error.message });
    }
}
