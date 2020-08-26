import React, { Component } from 'react';
import Card from './CardUI';
import './Card.css';
import img1 from './images/food.jpeg';
// import img2 from '../images/img';
// import img3 from '../images/img';

class Cards extends Component {
    render() {
        return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
  
                {/* <Card title="Title" imgsrc= {img1}/> */}
                <Card imgsrc= {img1}/>

            </div>

            <div className="container-fluid d-flex justify-content-center">
                 
                 <Card imgsrc= {img1} />

            </div>

            <div className="container-fluid d-flex justify-content-center">
                 
                 <Card imgsrc= {img1} />

            </div>
            
            <div className="container-fluid d-flex justify-content-center">
                 
                 <Card imgsrc= {img1} />

            </div>
        </div>
        );
    }
}

export default Cards;