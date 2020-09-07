import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StudentForm from './StudentForm';
import { createStudent } from '../service/StudentService';

const FormModal = (props) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var student, buttonColor, buttonText, crudFunction;

  // Switch Allows Modal Reuse for Update and Create
  switch (type) {
    case 'create':
      buttonColor = 'primary';
      buttonText = type.toString().toUpperCase();
      crudFunction = (student) => { createStudent(student); }
      student = {};
      break;
    case 'update':
      buttonColor = 'warning';
      buttonText = type.toString().toUpperCase();
      crudFunction = props.handleUpdate;
      student = props.student;
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
          <Modal.Title>{buttonText + ' ' + 'Student'}</Modal.Title>
        </Modal.Header>
        <Modal.Body><StudentForm student={student} handleCrud={crudFunction} /></Modal.Body>
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