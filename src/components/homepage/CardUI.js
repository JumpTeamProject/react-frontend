import React from 'react';
import './Card.css';

// function handleClick() {
//     console.log("I was clicked")
// }

// function CardClick() {
//     return (
//         <CardUI onClick={handleClick} />
//     )
// }

const Card = props =>{
    return(
        <div className="container-fluid d-flex justify-content-center">
            {/* onClick={handleClick} */}
            <div className="card card-block text-center shadow" id={'card' + props.info.id}> 
            <div className="row">
                <div className="col-lg-3 overflow">
                    <img src={props.imageUrl} alt='FoodImage' className="card-img"/>
                </div>
                 <div className="col-lg-8 card-body text-dark">
                    <h4 className="card-title">{props.info.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.info.rating}</h4>
                    <p className="card-text text-secondary">{props.info.description}</p>
                </div>
                {/* Button for ADMIN ONLY: */}
                <div className="col-lg-2">
                    <button className="btn btn-outline-success" onClick={props.handleDelete}>Delete Restaurant</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Card;