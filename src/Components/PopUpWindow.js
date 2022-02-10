import React,{useState} from "react";
import {Button, Modal} from "react-bootstrap";
import DeviceDetails from "./DeviceDetails";

function PopUpWindow({show,handleClose,popContent}){
   
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{popContent}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default PopUpWindow