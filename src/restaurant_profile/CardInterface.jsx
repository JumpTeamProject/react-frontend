import React from "react";
import { deleteReview, updateReview } from '../service/ReviewService';
import CardLayout from "./CardLayout";

// Card Interface Contains All Card Rendering, Grouping, Functions, and Modals
function CardInterface(props) {

  // Delete Student Card
  const handleDelete = (id) => {
    let ok = window.confirm('Are you sure you wish to delete this review?\nPress "Ok" to confirm');
    if (ok === true) {
      var removeCard = document.getElementById('card' + id);
      removeCard.parentNode.removeChild(removeCard);
      deleteReview(id);
      window.alert('Student has been deleted');
    }
  }

  // Update Student Card
  const handleUpdate = (review) => {
    updateReview(review);
  }

  // Render the Cards and the Modals
  return (
      <div className="container-fluid d-flex justify-content-center">
          <CardLayout id={props.id} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </div>
  );
}

export default CardInterface;