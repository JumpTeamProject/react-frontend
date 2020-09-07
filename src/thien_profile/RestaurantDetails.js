import React from "react";

const RestaurantDetails = (props) => {
    return (
        <div className="card-body-column text-dark">
            <h4>Owner:</h4>
            <p>{props.owner}</p>
            <hr />
            <h4>Contact:</h4>
            <p>{props.phoneNumber}</p>
            <hr />
            <h4>Location:</h4>
            <p>{props.location}</p>
        </div>
    )
}

export default RestaurantDetails;