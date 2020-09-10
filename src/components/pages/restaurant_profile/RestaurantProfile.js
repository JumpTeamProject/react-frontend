import React, { Component } from 'react'
import './containers/container-style.css';

import img1 from '../../../image/mcdonalds.jpg';

import FormModal from './forms/FormModal';
import RestaurantImage from "./containers/RestaurantImage";
import RestaurantDetails from "./containers/RestaurantDetails";
import CardInterface from "./cards/CardInterface";

function ReviewList(props) {
    return (
        <div className="column">
            <div className="col-lg-12">
                <SplitPane left={props.name} right={props.rating} />
            <div className="card-body-column text-dark">
                <h4>Description:</h4>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="col-lg-12">
                <FormModal type='review' />
                <CardInterface />
            </div>
        </div>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}


class RestaurantProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'review',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this.setState({ color: event.target.value });

        let name = event.target.value;
        let value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        alert(
            'Reviews and Feedback: ' + this.state.value
        );

        // do your call maybe to post this information or update something with an api

        this.setState({
            value: 'review',
        });

        event.preventDefault();
    }

    render() {
       
        const review = {
            id: 1
        };
        const name = <div className="card-body-column text-dark" id="restname"><h4>Name:</h4><p>Bob</p></div>;
        const rating = <div className="card-body-column text-dark" id="restrating"><h4>Rating:</h4><p>4.5</p></div>;
        const left = <div className="column"><div className="col-lg-8"><RestaurantImage imageURL={this.props.imageURL} /></div><div className="col-lg-8"><RestaurantDetails owner={this.props.owner} phoneNumber={this.props.phoneNumber} location={this.props.addressId} /></div></div>;
        const right = <ReviewList description={"bob"} review={review} value={this.state.review} handleChange={this.handleChange} name={name} rating={rating} />;

        return (
            <div>
                <div className="container-fluid d-flex justify-content-center">
                    <SplitPane left={left} right={right}/>
                </div>
            </div>
        );
    }
}

export default RestaurantProfile;
