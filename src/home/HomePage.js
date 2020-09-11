import React, {useState} from 'react';
import CardLayout from './CardLayout';
import FormModal from './FormModal';
import {func} from "prop-types";

function HomePage(props) {
    const [user, setUser] = useState({});
    if (localStorage.getItem("currentUser") !== '') {
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        console.log(user);
    }

    
        return (
            <div>

                <FormModal type = "create" />
                <CardLayout />
            </div>
        );

}

export default HomePage;

