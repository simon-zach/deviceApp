import React from "react";
import {Form,Button} from "react-bootstrap"

function AddNewDevice(){
    return(
        <>
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Device Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Disabled" />
            </Form.Group>
            <Button variant="primary">
                Create
            </Button>
 
            
        </Form>
        </>
    )
}
export default AddNewDevice