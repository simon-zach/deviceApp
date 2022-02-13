import {connect } from "react-redux";
import {updateDevice,removeDevice} from "./../../redux/devicesRedux"
import DeviceDetails from "./DeviceDetails";

  const mapDispatchToProps = dispatch => ({ 
    updateDevice: device => dispatch(updateDevice(device)),
    removeDevice: device => dispatch(removeDevice(device)),
  })
 
export default connect(null,mapDispatchToProps)(DeviceDetails)
  