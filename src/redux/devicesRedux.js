const createActionName = function(name) {
    return `app/devices/${name}`
}

const ADD_DEVICE = createActionName("ADD_DEVICE");
const UPDATE_DEVICE = createActionName("UPDATE_DEVICE");
const REMOVE_DEVICE = createActionName("REMOVE_DEVICE"); 

//action creators
export const addDevice = payload => ({ type: ADD_DEVICE, payload })
export const updateDevice = payload => ({ type: UPDATE_DEVICE, payload })
export const removeDevice = payload => ({ type: REMOVE_DEVICE, payload })

//selectors
export const getAllDevices = state => state.devices.data;

/*


export const getBook = (state, bookId) => state.books.data.find((book)=>book.id===bookId);


// action creators
export const addBook = payload => ({ type: ADD_BOOK, payload })
export const removeBook = payload => ({ type: REMOVE_BOOK, payload })
export const updateBooksData = payload => ({ type: FETCH_BOOKS, payload })
export const updateBook = payload => ({ type: UPDATE_BOOK, payload })

export const startRequest = () => ({ type: START_REQUEST })
export const finishRequestWithError = () => ({ type: FINISH_REQUEST_WITH_ERROR })
export const finishRequestWithSuccess = () => ({ type: FINISH_REQUEST_WITH_SUCCESS })
export const resetRequestStatus = () => ({type: RESET_REQUEST_STATUS})
*/


const reducer = function(statePart = [], action = {}) {
    
    switch(action.type) {
        
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