import axios from 'axios';

const url = 'http://localhost:5000/appointments';

export const fetchAppointments = () => axios.get(url);
export const createAppointment = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
