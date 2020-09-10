import React, { useState } from 'react'
import './container-style.css';

import { useLocation } from 'react-router-dom';
import FormModal from './FormModal';
import RestaurantImage from "./RestaurantImage";
import RestaurantDetails from "./RestaurantDetails";
import CardInterface from "./CardInterface";
import { useFetch } from '../service/RestaurantService';

function ReviewList(props) {
    return (
        <div className="column">
            <div className="col-lg-12">
                <SplitPane left={props.name} right={props.rating} />
            <div className="card-body-column text-dark">
                <h4>Description:</h4>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="col-lg-12">
                <FormModal type='review' />
                <CardInterface id={props.value} />
            </div>
        </div>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}


const RestaurantProfile = props => {
    const location = useLocation();
    const id = location.search.substring(1, location.search.length);
    const { loading, data } = useFetch('getById', id);
    console.log(id);

    const name = <div className="card-body-column text-dark" id="restname"><h4>Name:</h4><p>{data.name}</p></div>;
    const rating = <div className="card-body-column text-dark" id="restrating"><h4>Rating:</h4><p>{data.rating}</p></div>;
    const left = <div className="column"><div className="col-lg-8"><RestaurantImage imageURL={data.imageUrl} /></div><div className="col-lg-8"><RestaurantDetails owner={data.owner} phoneNumber={data.phoneNumber} location={data.addressId} /></div></div>;
    const right = <ReviewList description={data.description} value={id} name={name} rating={rating} />;

        return (
            <div>
                <div className="container-fluid d-flex justify-content-center">
                    {loading && <p>loading...</p>}
                    {data && <SplitPane left={left} right={right} />}
                </div>
            </div>
        );
    
}

export default RestaurantProfile;
