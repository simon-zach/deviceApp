import React,{useState} from "react";

import PopUpWindow from "./PopUpWindow";
import DeviceItem from "./DeviceItem";
import { Button ,ListGroup, Stack} from "react-bootstrap";
import AddNewDevice from "./AddNewDeviceContainer";
import DeviceDetails from "./DeviceDetails";

const deviceArr=[
    {
      id: 234234234,
      name: 'defgr',
      description: 'asdasd',
      disabled: false,
    },
    {
      id: 4343243526,
      name: 'qwrfw',
      description: 'bntgrfbntrg',
      disabled: false,
    },
  ]
function DeviceList(){

    const [show, setShow] = useState(false);
    const [popContent, setPopUpContent] = useState();
    const handleClose = () => setShow(false);
    const handleShow = (device) => {

        setShow(true);
        setPopUpContent(<DeviceDetails device={device}></DeviceDetails>);
    }

    const handleNewDevice= () => {

        setShow(true);
        setPopUpContent(<AddNewDevice></AddNewDevice>);
    }

    return(
        <>
        <Stack direction="horizontal" gap={3}>
            <Button onClick={handleNewDevice}>Add New Device</Button>{' '}
            <Button>Refresh</Button>
        </Stack>
        <PopUpWindow popContent={popContent} show={show} handleClose={handleClose}></PopUpWindow>
        <h2 gap={3}>Device List</h2>
        <ListGroup>
            {deviceArr.map((device)=>{
                return (
                    
                        <ListGroup.Item key={device.id} className="d-flex justify-content-between align-items-start" onClick={()=>handleShow(device)}>
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                                <DeviceItem id={device.id}></DeviceItem>
                            </div>
                        </ListGroup.Item>
                    
                )
            })}
        </ListGroup>
       
        
  
 

        </>
    )
}
export default DeviceList