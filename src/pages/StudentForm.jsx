import React, { Component } from 'react';
import './form.css';

class StudentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.restaurant.id,
            name: props.restaurant.name,
            imageURL: props.restaurant.imageURL,
            menuLink: props.restaurant.menuLink,
            owner: props.restaurant.owner,
            phoneNumber: props.restaurant.phoneNumber,
            description: props.restaurant.description,
            addressId: props.restaurant.addressId
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
                                <label >First Name:</label>
                                <input type="text" name="firstName" className="form-control" id="firstName" value={this.state.name} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Last Name:</label>
                                <input type="text" name="lastName" className="form-control" id="lastName" value={this.state.owner} onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >email:</label>
                            <input type="text" name="email" className="form-control" id="email" value={this.state.menuLink} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Department:</label>
                            <input type="text" name="department" className="form-control" id="department" value={this.state.description} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Image URL:</label>
                            <input type="text" name="imagePath" className="form-control" id="imagePath" value={this.state.imageURL} onChange={this.handleChange} required />
                        </div>

                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default StudentForm;