import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './card-style.css';
// import Card from './RestaurantProfile';

const Card = props => {
    return (
        // <Router>
        <div className="card text-center shadow" >
            <div className="overflow" >
                <img src={props.imgsrc} alt="image" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Description here</p>
                {/* <Route> */}
                {/* <Link to="/profile"> */}
                <a href="#" className="btn btn-outline-success">Click Here</a>
                {/* </Link> */}
                {/* </Route> */}
            </div>
        </div>
        // </Router>

    );
}

export default Card;