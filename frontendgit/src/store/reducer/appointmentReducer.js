import * as api from '../apii/index.js'

const getDataFromLocal = () => {

  return JSON.parse(localStorage.getItem("appointMentData"));
};
const getDataFromMongo=()=>{
  try {
    const { data } = api.fetchAppointments();
console.log(data);
    return (data);
  } catch (error) {
    console.log(error.message);
  }
  

}


const initialState = getDataFromMongo() || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {  
    case "ADD_APPOINTMENT":
      return [...state, action.payload];

      // state = [...state, action.payload];
      
      // localStorage.setItem("appointMentData", JSON.stringify(state));
      // return state;
    default:
      return state;
  }
};

export default reducer;
