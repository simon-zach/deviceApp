import React,{useEffect, useState} from "react";

import PopUpWindow from "../PopUpWindow";
import DeviceItem from "../DeviceItem";
import { Button ,ListGroup, Stack, Badge, Row,Col,Container} from "react-bootstrap";
import AddNewDevice from "../AddNewDevice/AddNewDeviceContainer";
import DeviceDetails from "../DeviceDetails/DeviceDetailsContainer";
import { useSelector } from 'react-redux'
import {getAllDevicesSelector} from "./../../redux/selectors"


function DeviceList({fetchDevicesRequest}){

    const devicesForList = useSelector(state => getAllDevicesSelector(state))
    
    const timer30s = async () => {
         setTimeout(()=>{
            fetchDevicesRequest()
              console.log('30 sec timer finished.')
                return(timer30s()) 
         },30000)
    }

    useEffect(()=>{
        timer30s()
        fetchDevicesRequest()    
    },[])
    
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
    }
    return(
        <>
        <Stack className="m-2" direction="horizontal" gap={3}>
            <Button onClick={handleNewDevice}>Add New Device</Button>{' '}
            <Button onClick={handleRefreshClick}>Refresh</Button>
        </Stack>
        <PopUpWindow popUpTitle={popUpTitle} popUpContent={popUpContent} show={show} handleClose={handleClose}></PopUpWindow>

        <h2 gap={3}>Device List:</h2>
        <ListGroup>
            {devicesForList && devicesForList.length===0 && <h3>No devices</h3>}
            {devicesForList && devicesForList.length>0 && devicesForList.map((device,index)=>{
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