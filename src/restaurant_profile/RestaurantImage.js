import React from "react";
import './container-style.css';
const RestaurantImage = (props) => {
    return (
        <div className="overflow" >
            <img src={props.imageURL} alt="image" id="profileimg" className="card-img-top-column" />
        </div>
    )
}

export default RestaurantImage;