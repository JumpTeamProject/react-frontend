import React, { Component } from "react";
const RestaurantImage = (props) => {
    return (
        <div className="overflow" >
            <img src={props.imgsrc} alt="image" className="card-img-top-column" />
        </div>
    )
}

export default RestaurantImage;