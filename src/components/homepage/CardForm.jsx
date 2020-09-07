import React, { Component } from 'react';
import './form.css';

class CardForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.restaurant.id,
            name: props.restaurant.name,
            description: props.restaurant.description,
            imageUrl: props.restaurant.imageUrl,
            rating: props.restaurant.rating,
            phoneNumber: props.restaurant.phoneNumber
       };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit = (event) => {
        console.log('submit');
        this.props.handleCrud(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="form-style">
                    {this.state.id && <h3>{'Changes for ' + this.state.name}</h3>}
                    <form onSubmit={this.handleSubmit}>
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >Restaurant Name:</label>
                                <input type="text" name="name" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >description:</label>
                            <input type="text" name="description" className="form-control" id="description" value={this.state.description} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Image URL:</label>
                            <input type="text" name="imageurl" className="form-control" id="imageurl" value={this.state.imageUrl} onChange={this.handleChange} required />
                        </div>

                        <input type="button" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default CardForm;