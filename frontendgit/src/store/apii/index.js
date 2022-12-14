import axios from 'axios';

const url = 'http://localhost:5000/appointment';

export const fetchAppointments = () => axios.get(url);
export const createAppointment = (appointmentData) => axios.post(url, appointmentData);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
