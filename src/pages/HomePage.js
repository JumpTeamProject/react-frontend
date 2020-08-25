import React, { Component } from 'react';
import Card from './CardUI';

import img1 from '../image/mcdonalds.jpg';
import img2 from '../image/burgerking.jpg';
import img3 from '../image/wendys.jpg';

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Mcdonalds" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Burger King" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Wendys" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;