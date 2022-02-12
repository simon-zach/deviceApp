

const ADD_DEVICE = "ADD_DEVICE";
const UPDATE_DEVICE = "UPDATE_DEVICE";
const REMOVE_DEVICE = "REMOVE_DEVICE"; 
const SAVE_FETCHED_DEVICES = "SAVE_FETCHED_DEVICES"; 
const FETCH_DEVICES_REQUEST= "FETCH_DEVICES_REQUEST"; 

//action creators

export const addDevice = payload => ({ type: ADD_DEVICE, payload })
export const updateDevice = payload => ({ type: UPDATE_DEVICE, payload })
export const removeDevice = payload => ({ type: REMOVE_DEVICE, payload })
export const saveFetchedDevices = payload => ({ type: SAVE_FETCHED_DEVICES, payload })

export const fetchDevicesRequest = () => ({ type: FETCH_DEVICES_REQUEST})

//selectors
export const getAllDevices = state => state.devices.data;

const reducer = function(statePart = [], action = {}) {
    
    switch(action.type) {
        case SAVE_FETCHED_DEVICES:
            //console.log(action)
            return { data:  action.payload }
        case ADD_DEVICE:
            return { ...statePart, data: [ ...statePart.data, action.payload ] }
        case UPDATE_DEVICE:
            return { ...statePart, data: [ ...statePart.data.map((device)=>device.id===action.payload.id?action.payload:device)] }
        case REMOVE_DEVICE:
            return { ...statePart, data: [ ...statePart.data.filter((device)=>device.id!==action.payload.id)] }
                default:
            return statePart
    }
}
           
export default reducer