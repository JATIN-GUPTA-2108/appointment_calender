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
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new appointmentData({ p1,p2,p3,p4, title,date , time})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
