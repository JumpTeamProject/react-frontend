import React, { Component } from 'react';
import FormModal from './FormModal';
import './Card.css';
import CardClick from './CardClick';
import { Link } from 'react-router-dom';


/*function handleClick() {
    console.log("I was clicked");
}*/

// function CardClick() {
//     return (
//         <CardUI onClick={handleClick} />
//     )
// }

/*const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(localStorage.getItem(localStorageKey) || -1);

    React.useEffect(() => { localStorage.setItem(localStorageKey, value); }, [value]);

    return [value, setValue];
};*/

const Card = props => {
    /*const [restuarantSelected, setRestuarantSelected] = useStateWithLocalStorage("restuarantSelected");
    console.log(localStorage.getItem("restuarantSelected"));
    const handleClick = event => {
        setRestuarantSelected(event.target.value); console.log(localStorage.getItem("restuarantSelected"));
    }*/
//class Card extends Component {

    //render() {
    return (
        <Link to={"/profile?" + props.info.id} /*onClick={handleClick} value={props.info.id}*/ >
        <div className="container-fluid d-flex justify-content-center">
            
                    <div className="card card-block text-center shadow" id={'card' + props.info.id} > 
            <div className="row">
                <div className="col-lg-3 overflow">
                    <img src={props.info.imageUrl} alt='FoodImage' className="card-img"/>
                </div>
                 <div className="col-lg-7 card-body text-dark">
                    <h4 className="card-title">{props.info.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.info.rating}</h4>
                    <p className="card-text text-secondary">{props.info.description}</p>
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
    //}
}

    function DeleteButton(props) {
        return(
            <div className="col-lg-2">
                <button className="btn btn-outline-success" onClick={props.handleDelete.bind(this, props.restaurantID)}>delete</button>
            </div>
        );
    }
export default Card;