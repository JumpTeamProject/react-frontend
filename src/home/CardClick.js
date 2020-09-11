import React from "react";
import { deleteRestaurant } from '../service/RestaurantService';
import CardLayout from './CardLayout';
// import GetCard from "./GetCard";

// Card Interface Contains All Card Rendering, Grouping, Functions, and Modals
function CardClick(props) {

  // Delete Restaurant Card
const handleDelete = (id) => {
    let ok = window.confirm('Are you sure you wish to delete this student?\nPress "Ok" to confirm');
    if (ok === true) {
      var removeCard = document.getElementById('card' + id);
      removeCard.parentNode.removeChild(removeCard);
      deleteRestaurant(id);
      window.alert('Card has been deleted');
    }
  }

  // Update Restaurant Card
//   const handleUpdate = (restaurant) => {
//     updateRestaurant(restaurant);
//   }

  // Render the Cards and the Modals

  // Removed: handleUpdate={handleUpdate}
  return (
    <div>
      <CardLayout handleDelete={handleDelete} />
    </div>
  );
}

export default CardClick;