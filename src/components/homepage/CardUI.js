import React, { Component } from 'react';
import FormModal from './FormModal';
import './Card.css';
import CardClick from './CardClick'

// function handleClick() {
//     console.log("I was clicked")
// }

// function CardClick() {
//     return (
//         <CardUI onClick={handleClick} />
//     )
// }

// const Card = props =>{
class Card extends Component {
    render() {
    return(
        <div className="container-fluid d-flex justify-content-center">
            {/* onClick={handleClick} */}
            <div className="card card-block text-center shadow" id={'card' + this.props.info.id}> 
            <div className="row">
                <div className="col-lg-3 overflow">
                    <img src={this.props.info.imageUrl} alt='FoodImage' className="card-img"/>
                </div>
                 <div className="col-lg-8 card-body text-dark">
                    <h4 className="card-title">{this.props.info.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.info.rating}</h4>
                    <p className="card-text text-secondary">{this.props.info.description}</p>
                </div>
                {/* Button for ADMIN ONLY: */}
                <div className="col-lg-2"> 
                    <DeleteButton restaurantID = {this.props.info.id} handleDelete={this.props.handleDelete } />
                </div>
            </div>
            </div>
        </div>
    );
    }
}

    function DeleteButton(props) {
        return(
            <div className="col-lg-2">
                <button className="btn btn-outline-success" onClick={props.handleDelete.bind(this, props.restaurantID)}>delete</button>
            </div>
        );
    }
export default Card;