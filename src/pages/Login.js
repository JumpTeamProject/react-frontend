import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container login-container fadeInDown">
                    <div class="row">
                    <div class="col-md-6 login-form-1">
                        <h3>User Login</h3>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email" value="" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" value="" />
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 login-form-2">
                        <div class="login-logo">
                            <img src="https://images-platform.99static.com/fN5f206Bk81-FRpBlIRiD0YoeCs=/1x0:1025x1024/600x600/99designs-contests-attachments/73/73593/attachment_73593313" alt=""/>
                        </div>
                        <h3>Admin Login</h3>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email" value="" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" value="" />
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;