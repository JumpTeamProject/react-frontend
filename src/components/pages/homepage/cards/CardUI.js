import React, { Component } from 'react';
import FormModal from '../forms/FormModal';
import './Card.css';
import CardClick from './CardClick';
import { Link } from 'react-router-dom';


function handleClick(event, newPage) {
    console.log("I was clicked");
    localStorage.setItem( "showSearch", false );
}

// function CardClick() {
//     return (
//         <CardUI onClick={handleClick} />
//     )
// }

// const Card = props =>{
class Card extends Component {

    render() {
        return (
            <Link to="/profile" >
        <div className="container-fluid d-flex justify-content-center">
            
                    <div className="card card-block text-center shadow" id={'card' + this.props.info.id} onClick={handleClick}> 
            <div className="row">
                <div className="col-lg-3 overflow">
                    <img src={this.props.info.imageUrl} alt='FoodImage' className="card-img"/>
                </div>
                 <div className="col-lg-7 card-body text-dark">
                    <h4 className="card-title">{this.props.info.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.info.rating}</h4>
                    <p className="card-text text-secondary">{this.props.info.description}</p>
                </div>
                {/* Button for ADMIN ONLY: */}
                <div className="col-lg-2"> 
                <br/>
                <button className="btn btn-outline-success">delete</button>
                    {/* <DeleteButton cardID = {'card' + this.props.info.id} restaurantID = {this.props.info.id} handleDelete={this.props.handleDelete } /> */}
                </div>
            </div>
            </div>
                </div></Link>
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