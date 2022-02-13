
import { call, put, takeLatest,takeEvery ,delay} from 'redux-saga/effects'
import {getDevicesAPI, postDeviceAPI,deleteDeviceAPI,updateDeviceAPI} from "./../apis/index"

//get
function* getDevicesHandler(action) {
   try {
      const response = yield call(getDevicesAPI);
      console.log(response)
      if(response.status===200){
        const payload = response.data
        yield put({type: 'SAVE_FETCHED_DEVICES',payload})
      }
   } catch (e) {
       console.log(e)
   }
}


//post
function* postDevicesHandler(action) {
  try {
    const device = action.payload
    yield call(postDeviceAPI,device);
  } catch (e) {
      console.log(e)
  }
}

//delete
function* deleteDevicesHandler(action) {
  try {
    const device = action.payload
    console.log("delete")
    console.log(device)
    yield call(deleteDeviceAPI,device);
  } catch (e) {
      console.log(e)
  }
}
//delete
function* updateDevicesHandler(action) {
  try {
    const device = action.payload
    console.log("update")
    console.log(device)
    yield call(updateDeviceAPI,device);
  } catch (e) {
      console.log(e)
  }
}

function* mySaga() {
  yield takeEvery("ADD_DEVICE",postDevicesHandler);
  yield takeEvery("FETCH_DEVICES_REQUEST",getDevicesHandler);
  yield takeEvery("REMOVE_DEVICE",deleteDevicesHandler);
  yield takeEvery("UPDATE_DEVICE",updateDevicesHandler);
}

export default mySaga;