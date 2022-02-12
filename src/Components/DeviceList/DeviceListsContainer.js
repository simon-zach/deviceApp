
import {connect } from "react-redux";
import {fetchDevicesRequest,getAllDevices} from "./../../redux/devicesRedux"
import DeviceList from "./DeviceList";
import {getAllDevicesSelector} from "./../../redux/selectors"

const mapStateToProps = state => ({
    
    getAllDevices: getAllDevicesSelector(state)//getAllDevices(state)
  })

  const mapDispatchToProps = dispatch => 
    ({
      fetchDevicesRequest: ()=>dispatch(fetchDevicesRequest()),
    })
  


export default connect(mapStateToProps,mapDispatchToProps)(DeviceList)
  
