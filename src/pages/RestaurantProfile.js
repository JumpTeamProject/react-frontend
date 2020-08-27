import React, { Component } from 'react'
import './card-style.css';

import img1 from '../image/mcdonalds.jpg';

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

                {/* <a href="#" className="btn btn-outline-success">Click Here</a> */}
            </div>
        </div>
    );
}

class RestaurantProfile extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="column">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Mcdonalds" />
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantProfile;
