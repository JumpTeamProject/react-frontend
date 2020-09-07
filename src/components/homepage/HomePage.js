import React, { Component } from 'react';
import CardLayout from './CardLayout';
import AddButton from './AddButton';

class HomePage extends Component {
    render() {
        return (
            <div>
                <AddButton />
                <CardLayout />
            </div>
        );
    }
}

export default HomePage;