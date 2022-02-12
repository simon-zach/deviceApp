
import { call, put, takeLatest,takeEvery ,delay} from 'redux-saga/effects'
import { saveFetchedDevices,fetchDevicesRequest,addDevice } from './devicesRedux'
import axios from "axios"
import {getDevicesAPI, postDeviceAPI} from "./../apis/index"

//const getDevices= () => {
//  return axios.get("http://localhost:3131/devices")
//}

//get
function* getDevicesHandler(action) {
   try {
      const response = yield call(getDevicesAPI);
      console.log(response)
      if(response.status===200){
       // yield delay(3000);
        //saveFetchedDevices(response.data)
        const payload = response.data
       console.log(payload)
        //console.log('SAVE_FETCHED_DEVICES',response.data)
        yield put({type: 'SAVE_FETCHED_DEVICES',payload})
      }
      
   } catch (e) {
       console.log(e)
   }
}


//post


function* postDevicesHandler(action) {
  try {
   // yield delay(4000);
    //console.log(action.payload)
    const device = action.payload
    yield call(postDeviceAPI,device);
  } catch (e) {
      console.log(e)
  }
}

function* mySaga() {
  yield takeEvery("ADD_DEVICE",postDevicesHandler);
 //console.log(fetchDevicesRequest)
  yield takeEvery("FETCH_DEVICES_REQUEST",getDevicesHandler);
}

export default mySaga;