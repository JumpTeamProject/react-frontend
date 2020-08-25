import React, { Component } from 'react';

class TempInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            temperature: event.target.value
        });
    }
    

    render() {

        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };

        const temp = this.state.temperature;
        const scale = this.props.scale;

        return(
            <div className="form-group">
                {/* will return based on c or f based on that scale */}
                <label>{scaleNames[scale]}</label>
                <input type="text" value={temp} onChange={this.handleChange} className="form-control"/>
                <p>Temperature State: {temp}</p>
            </div>
        );
    }
}

class TempCalc2 extends Component {
    render() {
        return (
            <div className="tempcalc">
                <h3>Temperature Calculator V2</h3>
                <TempInputs scale="c"/>
                <TempInputs scale="f"/>
            </div>
        );
    }
}

export default TempCalc2;