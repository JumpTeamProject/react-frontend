import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import './card-style.css';
// import RestaurantProfile from './RestaurantProfile';

// const Card = props => {
//     return (
//         // <Router>
//         <div className="card text-center shadow" >
//             <div className="overflow" >
//                 <img src={props.imgsrc} alt="image" className="card-img-top" />
//             </div>
//             <div className="card-body text-dark">
//                 <h4 className="card-title">{props.title}</h4>
//                 <p className="card-text text-secondary">Description here</p>
//                 {/* <Route> */}
//                 {/* <Link to="/profile"> */}
//                 <a href="#" className="btn btn-outline-success">Click Here</a>
//                 {/* </Link> */}
//                 {/* </Route> */}
//             </div>
//         </div>
//         // </Router>

//     );
// }

const Card = props => {
    return (
        <div className="card card-block text-center shadow">
            <div class="row">
                <div className="col-lg-3 overflow">
                    <img src={props.imgsrc} alt='Image 1' className="card-img" />
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