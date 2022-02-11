import React,{useState} from "react";
import {Form, Button} from "react-bootstrap";

function DeviceDetails({device,updateDevice,removeDevice,handleClose}){


    const [name,setName] = useState(device.name)
    const [description,setDescription] = useState(device.description)
    const [disabled,setDisabled] = useState(device.disabled)

    const handleSave = () => {
        updateDevice({
            id:device.id,
            name:name,
            description:description,
            disabled:disabled
        })
        handleClose()
    }
    const handleRemove = () => {
        removeDevice({
            id:device.id,
        })
        handleClose()
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeDisabled = (e) => {
        setDisabled(e.target.checked)
    }

    return(
        <>
       
            
            <Form>
                <div>Device Id: {device.id}</div><br/>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Device Name</Form.Label>
                    <Form.Control type="text"  value={name} onChange={onChangeName}/>
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"  value={description}  onChange={onChangeDescription}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Disabled" checked={disabled} onChange={onChangeDisabled}/>
                </Form.Group>
                <Button onClick={handleSave} variant="primary">
                    Save
                </Button>{' '}
                <Button onClick={handleRemove} variant="primary">
                    Delete
                </Button>{' '}
                <Button onClick={handleClose} variant="primary">
                    Cancel
                </Button>

            </Form>
        </>
        
    )
}
export default DeviceDetails