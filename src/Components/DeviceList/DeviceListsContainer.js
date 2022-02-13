
import {connect } from "react-redux";
import {fetchDevicesRequest} from "./../../redux/devicesRedux"
import DeviceList from "./DeviceList";

  const mapDispatchToProps = dispatch => ({
      fetchDevicesRequest: ()=>dispatch(fetchDevicesRequest()),
  })
  
export default connect(null,mapDispatchToProps)(DeviceList)
  
