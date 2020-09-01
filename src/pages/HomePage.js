import React, { Component } from 'react';
import Card from '../CardUI';

import img1 from '../image/mcdonalds.jpg';
import img2 from '../image/burgerking.jpg';
import img3 from '../image/wendys.jpg';

class HomePage extends Component {
    render() {
        return (
            <div>
               <Card/>
            </div>
        );
    }
}

export default HomePage;