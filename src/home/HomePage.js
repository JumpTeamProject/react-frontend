import React, { Component } from 'react';
import CardLayout from './CardLayout';
import FormModal from './FormModal';

class HomePage extends Component {
    render() {
       
        return (
            <div>
                <FormModal type = "create" />
                <CardLayout />
            </div>
        );
    }
}

export default HomePage;