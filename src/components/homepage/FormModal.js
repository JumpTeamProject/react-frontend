import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CardForm from './CardForm.jsx';
import { createRestaurant } from '../../service/CardService';
import AddButton from './AddButton';

const FormModal = (props) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var restaurant, buttonColor, buttonText, crudFunction;

  // Switch Allows Modal Reuse for Update and Create
  switch (type) {
    case 'create':
      buttonColor = 'primary';
      buttonText = type.toString().toUpperCase();
      crudFunction = (restaurant) => { createRestaurant(restaurant); }
      restaurant = {};
      break;
    // case 'update':
    //   buttonColor = 'warning';
    //   buttonText = type.toString().toUpperCase();
    //   crudFunction = props.handleUpdate;
    //   student = props.student;
    //   break;
    default:
  }

  return (
    <>
      {<AddButton variant={buttonColor} onClick={handleShow}>
        {buttonText}
      </AddButton>}

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{buttonText + ' ' + 'Restaurant'}</Modal.Title>
        </Modal.Header>
        <Modal.Body><CardForm restaurant={restaurant} handleCrud={crudFunction} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;