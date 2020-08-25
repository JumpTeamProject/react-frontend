import React, { Component } from 'react';
import '../Login.css';

class Login extends Component {
    render() {
        return (
            <div className="container login-container fadeInDown">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3 className="user">User Login</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" value="" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-2">
                        <div className="login-logo">
                            <img src="https://st.depositphotos.com/1005920/2423/i/950/depositphotos_24232387-stock-photo-food-red-circle-web-glossy.jpg" alt=""/>
                        </div>
                        <h3 className="admin">Admin Login</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" value="" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;