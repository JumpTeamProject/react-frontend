import React, {Component, useState} from 'react';
import CardLayout from './CardLayout';
import FormModal from './FormModal';
import {func} from "prop-types";

function HomePage(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser") )|| {});

    console.log(user.email);
        return (
            <div>

                <FormModal type = "create" />
                <CardLayout />
            </div>
        );

}

export default HomePage;

