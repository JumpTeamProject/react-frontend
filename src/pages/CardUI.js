import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './card-style.css';
import RestaurantProfile from './RestaurantProfile';

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