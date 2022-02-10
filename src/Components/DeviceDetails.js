import React from "react";
import {Form, Button} from "react-bootstrap"

function DeviceDetails({device}){
    return(
        <>
            <h2>Device details</h2>
            
            <Form>
                <Form.Group className="mb-3" controlId="formId">
                    <Form.Label>Device Id</Form.Label>
                    <Form.Control type="text" value={device.id} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Device Name</Form.Label>
                    <Form.Control type="text" value={device.name} />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={device.description} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Disabled" />
                </Form.Group>
                <Button variant="primary">
                    Save
                </Button>
                <Button variant="primary">
                    Delete
                </Button>
            </Form>
        </>
        
    )
}
export default DeviceDetails