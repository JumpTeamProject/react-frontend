import React, { Component } from 'react'
import './card-style.css';

import img1 from '../image/mcdonalds.jpg';

import FormModal from './FormModal';
import RestaurantImage from "./RestaurantImage";
import RestaurantDetails from "./RestaurantDetails";

const Card = props => {
    return (
        <div className="card-column text-center shadow" id={'card' + props.review.id}>
            {/*<div className="overflow" >*/}
            {/*    <img src={props.imgsrc} alt="image" className="card-img-top-column" />*/}
            {/*</div>*/}
            {/*<RestaurantImage src={props.imageURL}/>*/}
            {/*<div className="card-body-column text-dark">*/}
            {/*    <h4 className="card-title">{props.title}</h4>*/}
            {/*    <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt lectus ut pellentesque dapibus. Nulla facilisis sit amet mi a hendrerit. Donec eget vehicula elit. Curabitur metus ligula, lacinia eget leo semper, blandit sagittis odio. Vivamus ullamcorper elit vulputate elit eleifend, congue convallis nisl aliquam. Pellentesque auctor turpis ut diam maximus elementum. Nam iaculis luctus porttitor. Mauris fringilla tellus tellus, ornare pulvinar lectus scelerisque non. Nunc vel mauris odio. Sed ullamcorper lacus dui, vel lobortis velit porttitor eget. Nulla at gravida ante, sit amet mattis metus. Pellentesque ultricies condimentum feugiat. Praesent gravida nunc ac nulla tincidunt, quis semper ipsum aliquet. Aliquam nec erat nibh.</p>*/}
            {/*    <hr />*/}
            {/*    <h4>Location:</h4>*/}
            {/*    <p>1234 Mcdonalds Ave</p>*/}
            {/*</div>*/}
            {/*<RestaurantDescriptionAndLocation name={props.title} description={props.description}/>*/}
            <form>
                <div className="form-group form-style">
                    <label htmlFor="review">Your reviews here</label>
                    <textarea value={props.value} onChange={props.handleChange} name="review" rows="10" className='form-control' placeholder="your reviews" />
                    <input type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
}

function ReviewList(props) {
    return (
        <div className="column">
        <div className="col-md-4">
            <div className="card-body-column text-dark">
                <h4>Description:</h4>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="col-md-4">
                <FormModal type='review' />
                <Card review={props.review} value={props.review} handleChange={props.handleChange} />
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
        const left = <div className="column"><div className="col-md-4"><RestaurantImage imageURL={this.props.imageURL} /></div><div className="col-md-4"><RestaurantDetails owner={this.props.owner} phoneNumber={this.props.phoneNumber} location={this.props.addressId} /></div></div>;
        const right = <ReviewList description={"bob"} review={review} value={this.state.review} handleChange={this.handleChange} />;

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
