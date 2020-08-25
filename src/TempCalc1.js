import React, { Component } from 'react';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>Water would boil at {props.celsius} degrees Celsius</p>
    }
    return <p>Water would not boil at {props.celsius} degrees Celsius</p>
}

class TempCalc1 extends Component {

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
        return (
            <div className="tempcalc">
                <h3>Temperature Calculator V1</h3> 
                <div className="form-group">
                    <label>Celsius</label>
                    <input type="text" value={this.state.temperature} onChange={this.handleChange} className="form-control" />
                </div>
                <BoilingVerdict celsius={parseFloat(this.state.temperature)}/>
            </div>
        );
    }
}

export default TempCalc1;