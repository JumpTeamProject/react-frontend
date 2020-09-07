import React, { Component } from 'react';
import '../Login.css';

//Will be updated to use Hooks
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            adminEmail: '',
            adminPassword: ''
        };
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]  : value });
    }

    handleUserSubmit(event) {
        // check if email and password match a user within the database

        alert(
            'User Login Information:\nEmail: ' + this.state.userEmail +
            '\nPassword: ' + this.state.userPassword
        );

        // do your call maybe to post this information or update something with an api

        this.setState({
            userEmail: '',
            userPassword: ''
        });

        event.preventDefault();
    }

    handleAdminSubmit(event) {
        // check if email and password match a admin within the database

        alert(
            'Admin Login Information:\nEmail: ' + this.state.adminEmail +
            '\nPassword: ' + this.state.adminPassword
        );

        // do your call maybe to post this information or update something with an api

        this.setState({
            adminEmail: '',
            adminPassword: ''
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="container login-container fadeInDown">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3 className="user">User Login</h3>
                        <form onSubmit={this.handleUserSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="userEmail" placeholder="Email" value={this.state.userEmail} onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="userPassword" placeholder="Password" value={this.state.userPassword} onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-2">
                        <h3 className="admin">Admin Login</h3>
                        <form onSubmit={this.handleAdminSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="adminEmail" placeholder="Email" value={this.state.adminEmail} onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="adminPassword" placeholder="Password" value={this.state.adminPassword} onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;