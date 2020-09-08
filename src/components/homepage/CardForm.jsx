import React, { Component } from 'react';
import './form.css';

class CardForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: props.restaurant.name,
            description: props.restaurant.description,
            imageUrl: props.restaurant.imageUrl,
            rating: 0.0,
            menuLink: null,
            phoneNumber: "(555) 555-5555",
            owner: props.restaurant.owner,
            addressId: 3

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
                    <form onClick={this.handleSubmit}>
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label>Restaurant Name:</label>
                                <input type="text" name="name" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >Description:</label>
                            <input type="text" name="description" className="form-control" id="description" value={this.state.description} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Image URL:</label>
                            <input type="text" name="imageUrl" className="form-control" id="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Owner:</label>
                            <input type="text" name="owner" className="form-control" id="owner" value={this.state.owner} onChange={this.handleChange} required />
                        </div>

                        <input type="submit" value="Submit" onClick={this.handleSubmit} className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default CardForm;