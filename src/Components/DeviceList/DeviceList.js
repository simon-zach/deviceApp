import React,{useEffect, useState} from "react";

import PopUpWindow from "../PopUpWindow";
import DeviceItem from "../DeviceItem";
import { Button ,ListGroup, Stack, Badge, Row,Col,Container} from "react-bootstrap";
import AddNewDevice from "../AddNewDevice/AddNewDeviceContainer";
import DeviceDetails from "../DeviceDetails/DeviceDetailsContainer";

function DeviceList({getAllDevices,fetchDevicesRequest}){

    const [devicesArr, setDevicesArr] = useState([]);
    //const devicesArr=[]
    useEffect(()=>{
      
        setDevicesArr(getAllDevices)
    },[getAllDevices])
    
    const [show, setShow] = useState(false);
    const [popUpContent, setPopUpContent] = useState();
    const [popUpTitle, setPopUpTitle] = useState();
    const handleClose = () => setShow(false);

    const handleShow = (device) => {

        setShow(true);
        setPopUpContent(<DeviceDetails handleClose={handleClose} device={device}></DeviceDetails>);
        setPopUpTitle("Device Details")
    }

    const handleNewDevice= () => {

        setShow(true);
        setPopUpContent(<AddNewDevice handleClose={handleClose}></AddNewDevice>);
        setPopUpTitle("Add new Device")
    }

    const handleRefreshClick=()=>{
        fetchDevicesRequest()
        //setDevicesArr(getAllDevices)
    }
    return(
        <>
        <Stack className="m-2" direction="horizontal" gap={3}>
            <Button onClick={handleNewDevice}>Add New Device</Button>{' '}
            <Button onClick={handleRefreshClick}>Refresh</Button>
        </Stack>
        <PopUpWindow popUpTitle={popUpTitle} popUpContent={popUpContent} show={show} handleClose={handleClose}></PopUpWindow>

        <h2 gap={3}>Device List</h2>
        <ListGroup>
            {console.log(devicesArr)}
            {devicesArr&&devicesArr.length>0 && devicesArr.map((device,index)=>{
                return (
                        <ListGroup.Item key={device.id} className="d-flex justify-content-between align-items-start" onClick={()=>handleShow(device)}>
                            
                                <Container>
                                    <Row>
                                        <Col>
                                            <span className="fw-bold">Device {index+1}</span>
                                        </Col>
                                        <Col>
                                           {device.disabled && <Badge className="float-end" pill bg="secondary">Disabled</Badge>}
                                           {!device.disabled && <Badge className="float-end" pill bg="success">Enabled</Badge>}
                                        </Col>
                                    </Row>    
                                
                                <Row>
                                    <DeviceItem id={device.id}></DeviceItem>
                                </Row>
                                
                                </Container>
                        </ListGroup.Item>
                    
                )
            })}
        </ListGroup>
       
        
  
 

        </>
    )
}
export default DeviceList