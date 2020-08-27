import React from 'react';
import './card-style.css';

const Card = props => {
    return (
        <div className="card text-center shadow" >
            <div className="overflow" >
                <img src={props.imgsrc} alt="image" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Description here</p>
                <a href="#" className="btn btn-outline-success">Click Here</a>
            </div>
        </div>
    );
}

export default Card;