import React from "react";

const RestaurantDescriptionAndLocation = (props) => {
    return (
        <div className="card-body-column text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.description}</p>
            <hr />
            <h4>Location:</h4>
            <p>{props.location}</p>
        </div>
    )
}

export default RestaurantDescriptionAndLocation;