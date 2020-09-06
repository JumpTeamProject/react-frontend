import React from 'react';
import './Card.css';


function handleClick() {
    console.log("I was clicked")
}

// function CardClick() {
//     return (
//         <CardUI onClick={handleClick} />
//     )
// }


const Card = props =>{
    return(
        <div className="card card-block text-center shadow" onClick={handleClick}>
            <div className="row">
                <div className="col-lg-3 overflow">
                    <img src={props.imgsrc} alt='Pizza1' className="card-img"/>
                </div>
                 <div className="col-lg-8 card-body text-dark">
                    <h4 className="card-title">{props.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.rating}</h4>
                    <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati quos incidunt nulla fuga rem et natus, quasi repellat dolorem.</p>
                </div>
                {/* Button for ADMIN ONLY: */}
                {/* <div className="col-lg-2">
                    <a href="#" className="btn btn-outline-success">Example Text</a>
                </div> */}
            </div>
        </div>
    );
}

export default Card;