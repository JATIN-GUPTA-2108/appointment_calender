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
      const { data } = await api.createAppointment(appointmentData);
  
      dispatch({ type: "ADD_APPOINTMENT", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };