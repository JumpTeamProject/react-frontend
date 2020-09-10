import React, { Component } from 'react';
import './form.css';

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.review.id,
            // firstName: props.review.firstName,
            // lastName: props.review.lastName,
            // email: props.review.email,
            // imagePath: props.review.imagePath,
            // department: props.review.department,
            description: props.review.description,
            rating: props.review.rating,
            restaurantId: props.review.restaurantId,
            userId: props.review.userId
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
                    {/* {this.state.id && <h3>{'Changes for ' + this.state.firstName + ' ' + this.state.lastName}</h3>} */}
                    <form onSubmit={this.handleSubmit}>
                        {/* <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >First Name:</label>
                                <input type="text" name="firstName" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Last Name:</label>
                                <input type="text" name="lastName" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleChange} required />
                            </div>
                        </div> */}

                        {/* <div className="form-group">
                            <label >email:</label>
                            <input type="text" name="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Department:</label>
                            <input type="text" name="department" className="form-control" id="department" value={this.state.department} onChange={this.handleChange} required />
                        </div> */}

                        {/* <div className="form-group">
                            <label >Image URL:</label>
                            <input type="text" name="imagePath" className="form-control" id="imagePath" value={this.state.imagePath} onChange={this.handleChange} required />
                        </div> */}

                        <div className="form-group">
                            <label >Description:</label>
                            <textarea type="text" name="description" className="form-control" id="description" value={this.state.description} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Rating:</label>
                            <input type="text" name="rating" className="form-control" id="rating" value={this.state.rating} onChange={this.handleChange} required />
                        </div>

                        {/* <div className="form-group">
                            <label >Restaurant ID:</label>
                            <input type="text" name="restaurantId" className="form-control" id="restaurantId" value={this.state.restaurantId} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >User ID:</label>
                            <input type="text" name="userId" className="form-control" id="userId" value={this.state.userId} onChange={this.handleChange} required />
                        </div> */}

                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default ReviewForm;