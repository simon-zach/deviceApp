
import {connect } from "react-redux";
import {getAllDevices} from "./../../redux/devicesRedux"
import DeviceList from "./DeviceList";

const mapStateToProps = state => ({
    getAllDevices: getAllDevices(state)
  })

 

export default connect(mapStateToProps,null)(DeviceList)
  
