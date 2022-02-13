import {connect } from "react-redux";
import {addDevice} from "./../../redux/devicesRedux"
import AddNewDevice from "./AddNewDevice";

  const mapDispatchToProps = dispatch => ({ 
    addDevice: device => dispatch(addDevice(device)),
  })
 
export default connect(null,mapDispatchToProps)(AddNewDevice)
  