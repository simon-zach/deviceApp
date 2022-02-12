import { createStore, combineReducers, applyMiddleware} from "redux"
import initialState from "./initialState"
import devicesReducer from "./devicesRedux"
import createSagaMiddleware  from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension";
import {rootSaga} from './index'

const reducers = {
    devices: devicesReducer,
}
const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers(reducers);


const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware),
   // composeWithDevTools(
      //  applyMiddleware(saga)
    //  applyMiddleware(sagaMiddleware),
    //)
)
sagaMiddleware.run(rootSaga)

export default store