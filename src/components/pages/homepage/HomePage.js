import React, { Component } from 'react';
import CardLayout from './cards/CardLayout';
import FormModal from './forms/FormModal';

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