import { all } from "redux-saga/effects";
import  mySaga  from "./sagas";

export function* rootSaga() {
    yield all([
        mySaga()
    ])
}