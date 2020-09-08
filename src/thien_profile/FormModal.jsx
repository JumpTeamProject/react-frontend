import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReviewForm from './ReviewForm';
import { createReview } from '../service/ReviewService';

const FormModal = (props) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var review, buttonColor, buttonText, crudFunction;

  // Switch Allows Modal Reuse for Update and Create
  switch (type) {
    case 'review':
      buttonColor = 'primary';
      buttonText = type.toString().toUpperCase();
      crudFunction = (review) => { createReview(review); }
      review = {};
      break;
    case 'update':
      buttonColor = 'warning';
      buttonText = type.toString().toUpperCase();
      crudFunction = props.handleUpdate;
      review = props.review;
      break;
    default:
  }

  return (
    <>
      {<Button variant={buttonColor} onClick={handleShow}>
        {buttonText}
      </Button>}

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{buttonText + ' ' + 'Restaurant'}</Modal.Title>
        </Modal.Header>
        <Modal.Body><ReviewForm review={review} handleCrud={crudFunction} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;