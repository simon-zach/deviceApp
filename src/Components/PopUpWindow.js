import React from "react";
import { Modal} from "react-bootstrap";

function PopUpWindow({show,handleClose,popUpContent,popUpTitle}){
   
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{popUpTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{popUpContent}</Modal.Body>
        </Modal>
      </>
    );
}
export default PopUpWindow