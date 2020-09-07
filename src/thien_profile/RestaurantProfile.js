import React, { Component } from 'react'
import './card-style.css';

import img1 from '../image/mcdonalds.jpg';

import CardInterface from '../pages/CardInterface';
import FormModal from './FormModal';

const Card = props => {
    return (
        <div className="card-column text-center shadow" >
            <div className="overflow" >
                <img src={props.imgsrc} alt="image" className="card-img-top-column" />
            </div>
            <div className="card-body-column text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt lectus ut pellentesque dapibus. Nulla facilisis sit amet mi a hendrerit. Donec eget vehicula elit. Curabitur metus ligula, lacinia eget leo semper, blandit sagittis odio. Vivamus ullamcorper elit vulputate elit eleifend, congue convallis nisl aliquam. Pellentesque auctor turpis ut diam maximus elementum. Nam iaculis luctus porttitor. Mauris fringilla tellus tellus, ornare pulvinar lectus scelerisque non. Nunc vel mauris odio. Sed ullamcorper lacus dui, vel lobortis velit porttitor eget. Nulla at gravida ante, sit amet mattis metus. Pellentesque ultricies condimentum feugiat. Praesent gravida nunc ac nulla tincidunt, quis semper ipsum aliquet. Aliquam nec erat nibh.</p>
                <hr />
                <h4>Location:</h4>
                <p>1234 Mcdonalds Ave</p>
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
        return (
            <div>
                <FormModal type='add review' />

                <div className="container-fluid d-flex justify-content-center">
                    <div className="column">
                        <div className="col-md-4">
                            <Card imgsrc={img1} title="Mcdonalds" />
                        </div>
                    </div>
                </div>

                <form>
                    <div class="form-group form-style">
                        <label for="review">Your reviews here</label>
                        <textarea value={this.state.review} onChange={this.handleChange} name="review" rows="10" className='form-control' placeholder="your reviews" />
                        <input type="submit" value="Submit" />
                    </div>

                </form>

                <CardInterface />
            </div>
        );
    }
}

export default RestaurantProfile;
