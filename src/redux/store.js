import { createStore, combineReducers, applyMiddleware} from "redux"
import initialState from "./initialState"
import devicesReducer from "./devicesRedux"
import createSagaMiddleware  from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
    devices: devicesReducer,
}
const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    initialState,
    
    composeWithDevTools(
      //  applyMiddleware(saga)
      applyMiddleware(sagaMiddleware),
    )
)

export default store