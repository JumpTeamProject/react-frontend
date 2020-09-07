import React, { Component } from 'react';
import FormModal from './FormModal';
import './Card.css';

class Card extends Component {

    render() {

        return (
            <div className="card" id={'card' + this.props.info.id}>
                <Header firstName={this.props.info.firstName} lastName={this.props.info.lastName} />
                <Body url={this.props.info.imagePath} email={this.props.info.email} dept={this.props.info.department} />
                <Footer cardID={'card' + this.props.info.id} student={this.props.info} studentID={this.props.info.id} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} />
            </div>

        );
    }
}

function Header(props) {
    return (
        <div className="card-header">
            <h3>{props.firstName + ' ' + props.lastName}</h3>
        </div>
    );
}

function Body(props) {
    return (
        <div className="card-body">
            <img src={props.url} alt={props.imgAlt} />
            <div className="container">
                <p>Email: {props.email}</p>
                <p>Department: {props.dept}</p>
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <div className="card-footer btn-group">
            <button className="btn btn-danger" onClick={props.handleDelete.bind(this, props.studentID)}>DELETE</button>
            <FormModal type='update' student={props.student} handleUpdate={props.handleUpdate} />
        </div>
    );
}
export default Card;