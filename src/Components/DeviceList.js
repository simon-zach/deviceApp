import React,{useState} from "react";

import PopUpWindow from "./PopUpWindow";
import DeviceItem from "./DeviceItem";
import { Button } from "react-bootstrap";
import AddNewDevice from "./AddNewDevice";

const deviceArr=[
    {
      id: 234234234,
      name: 'asdasdas',
      description: 'asdasd',
      disabled: false,
    },
    {
      id: 4343243526,
      name: 'asdasdas',
      description: 'asdasd',
      disabled: false,
    },
  ]
function DeviceList(){

    const [show, setShow] = useState(false);
    const [popContent, setPopUpContent] = useState();
    const handleClose = () => setShow(false);
    const handleShow = (id) => {

        setShow(true);
        setPopUpContent(id);
    }

    const handleNewDevice= () => {

        setShow(true);
        setPopUpContent(<AddNewDevice></AddNewDevice>);
    }

    return(
        <>
        <Button onClick={handleNewDevice}>Add New Device</Button>
        <PopUpWindow popContent={popContent} show={show} handleClose={handleClose}></PopUpWindow>
         <p>Device List</p>
         
            {deviceArr.map((device)=>{
                return <DeviceItem key={device.id} value={device.id}  onClick={()=>handleShow(device.id)}></DeviceItem>
            })}
         
       
        
        </>
    )
}
export default DeviceList