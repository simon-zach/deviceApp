const createActionName = function(name) {
    return `app/devices/${name}`
}

const ADD_DEVICE = createActionName("ADD_DEVICE");

//action creators
export const addDevice = payload => ({ type: ADD_DEVICE, payload })
/*
//selectors
export const getAllBooks = state => state.books.data;
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
            console.log(action.payload)
            return { ...statePart, data: [ ...statePart.data, action.payload ] }
                default:
            return statePart
    }
}
           
export default reducer