import { combineReducers } from 'redux';
import * as api from '../apii/index.js'

// export const addAppointment = ( appointmentData ) => {
//     return ( dispatch ) => {
//         dispatch({
//             type: "ADD_APPOINTMENT",

//             payload: appointmentData
//         })
//     }
// }

export const addAppointment = (appointmentData) => async (dispatch) => {
    try {
      console.log(appointmentData)
      const { data } = await api.createAppointment(appointmentData);
      console.log(data);
  
      dispatch({ type: "ADD_APPOINTMENT", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };