import React from "react";
import { deleteStudent, updateStudent } from '../service/ReviewService';
import CardLayout from "./CardLayout";

// Card Interface Contains All Card Rendering, Grouping, Functions, and Modals
function CardInterface(props) {

  // Delete Student Card
  const handleDelete = (id) => {
    let ok = window.confirm('Are you sure you wish to delete this review?\nPress "Ok" to confirm');
    if (ok === true) {
      var removeCard = document.getElementById('card' + id);
      removeCard.parentNode.removeChild(removeCard);
      deleteStudent(id);
      window.alert('Student has been deleted');
    }
  }

  // Update Student Card
  const handleUpdate = (review) => {
    updateStudent(review);
  }

  // Render the Cards and the Modals
  return (
    <div>
      <CardLayout handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </div>
  );
}

export default CardInterface;