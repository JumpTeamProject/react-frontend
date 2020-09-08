import React from "react";
const RestaurantImage = (props) => {
    return (
        <div className="overflow" >
            <img src={props.imageURL} alt="image" className="card-img-top-column" />
        </div>
    )
}

export default RestaurantImage;