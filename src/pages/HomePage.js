import React, { Component } from 'react';
import Card from '../thien_profile/CardUI';

// import img1 from '../image/mcdonalds.jpg';
// import img2 from '../image/burgerking.jpg';
// import img3 from '../image/wendys.jpg';
// import img4 from '../image/tacobell.jpg';

import '../caroline_home/Card.css';
import img1 from '../images/food.jpeg';

import CardInterface from '../pages/CardInterface';
import FormModal from './FormModal';

import { Link } from 'react-router-dom';

// class HomePage extends Component {

//     render() {
//         return (
//             <div className="container-fluid d-flex justify-content-center">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <Card imgsrc={img1} title="Mcdonalds" />
//                     </div>
//                     <div className="col-md-4">
//                         <Card imgsrc={img2} title="Burger King" />
//                     </div>
//                     <div className="col-md-4">
//                         <Card imgsrc={img3} title="Wendys" />
//                     </div>
//                     {/* <div className="col-md-4">
//                         <Card imgsrc={img4} title="Taco Bell" />
//                     </div> */}
//                 </div>
//             </div>
//         );
//     }
// }

class HomePage extends Component {
    render() {
        return (
            <div>

                <FormModal type='create' />
                <div className="container-fluid d-flex justify-content-center">

                    {/* <Card title="Title" imgsrc= {img1}/> */}
                    <Card imgsrc={img1} title={'Café Intermezzo'} rating={'5 stars'} />

                </div>

                {/* <div className="container-fluid d-flex justify-content-center">

                    <Card imgsrc={img1} title={'La Madeleine'} rating={'5 stars'} />

                </div>

                <div className="container-fluid d-flex justify-content-center">

                    <Card imgsrc={img1} title={'La Hacienda'} rating={'5 stars'} />

                </div>

                <div className="container-fluid d-flex justify-content-center">

                    <Card imgsrc={img1} title={'Chick-fil-A'} rating={'5 stars'} />

                </div> */}

                <CardInterface />

            </div>
        );
    }
}

export default HomePage;