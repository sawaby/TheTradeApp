
// include react

import React, { Component } from 'react';
var axios = require("axios");
var loginStyle = {
    display: "inline-block",
    padding: "32px 48px 0px 48px",
    border: "1px solid #EEE"
};

//create saved component
//var Login = React.createComponent({
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    onEmailChange(event) {
       
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ pass: event.target.value });
    }

    signIn(event) {
        event.preventDefault();
        axios.post('/login', this.state)
            .then((res) => {
                console.log("data is ", res);
                this.props.history.push('/Portfolio');
                console.log("status" ,res.status);
            })
            .catch((err) => {

               alert("Invalid Username or Password! Please Try Again.");
                console.log('Error signing in: ', err);
             
                this.setState({ pass: '', email: '' });
            });
    }


    //onclick function /form submit

    render() {

        return (

            <div>

                <div className="center">
                    <h2>The Trade App<sup>®</sup></h2>
                    <div className="section"></div>
                    <h5 className="indigo-text">Please login into your account</h5>
                    <div className="section"></div>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row" style={loginStyle}>
                            <form className="col s12" method="post" onSubmit={this.handleSubmit}>
                                <div className='row'>
                                    <div className='col s12'>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <p htmlFor='email'>Email <input className='validate align-right' type='email' name='email' id='email' onChange={this.onEmailChange}/></p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <p htmlFor='password'>Password <input className='validate' type='password' name='password' id='password' onChange={this.onPasswordChange} /></p>
                                    </div>
                                </div>
                                <br />
                                <div className="center">
                                    <div className='row'>
                                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo' onClick={this.signIn}>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }

}


// export component htmlFor use in other files
module.exports = Login;