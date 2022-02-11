import React ,{useState} from "react";
import {Form,Button} from "react-bootstrap"
import { nanoid } from "nanoid";

function AddNewDevice({addDevice,handleClose}){
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [disabled,setDisabled] = useState(false);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        /*
        console.log(nanoid(),
        name,
        description,
        disabled)*/
         addDevice({
            id: nanoid(),
            name: name,
            description: description,
            disabled: disabled
        })
        handleClose()
    }
    const handleOnChangeName = (e) => {
        setName(e.target.value);
    }
    const handleOnChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleOnChangeDisabled = (e) => {
       // console.log(e.target)
        setDisabled(e.target.checked);
    }
    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Device Name</Form.Label>
                <Form.Control required="required" type="text" name="name" value={name} onChange={e=>handleOnChangeName(e)} placeholder="Enter name" />
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control required="required" type="description" name="description" value={description} onChange={e=>handleOnChangeDescription(e)} placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"  onChange={e=>handleOnChangeDisabled(e)} label="Disabled" />
            </Form.Group>
            <Button type="submit" variant="primary">
                Create
            </Button>{' '}
            <Button onClick={handleClose} variant="primary">
                Cancel
            </Button>
            
        </Form>
        </>
    )
}
export default AddNewDevice