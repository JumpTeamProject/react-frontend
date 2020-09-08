import React, { Component } from 'react';
import './Login.css';
import {validateUser} from '../service/StudentService';

//Will be updated to use Hooks
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        console.log(validateUser(this.state.email, this.state.password));
        
        if (validateUser(this.state.email, this.state.password) !== null) {
            alert('Login Successful!!');
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="container fadeInDown">
		        <div className="d-flex justify-content-center">
			        <div className="user_card">
				        <div className="d-flex justify-content-center">
					        <div className="brand_logo_container">
						        <img src="https://icon-library.com/images/health-food-icon/health-food-icon-17.jpg" className="brand_logo" alt="Logo"/>
					        </div>
				        </div>
				        <div className="d-flex justify-content-center form_container">
					        <form onSubmit={this.handleSubmit.bind(this)}>
						        <div className="input-group mb-3">
                                    <input type="text" name="email" className="form-control input_user" value={this.state.email} placeholder="username" onChange={this.handleChange.bind(this)}/>
						        </div>
						        <div className="input-group mb-2">
							        <input type="password" name="password" className="form-control input_pass" value={this.state.password} placeholder="password" onChange={this.handleChange.bind(this)}/>
						        </div>
							    <div className="d-flex justify-content-center mt-3 login_container">
				 	                <button type="submit" name="submit" className="btn login_btn">Login</button>
				                </div>
                            </form>
                        </div>
				    </div>
                </div>
            </div>
        );
    }
}

export default Login;