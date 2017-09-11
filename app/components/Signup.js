
// include react

import React, { Component } from 'react';
var axios = require("axios");
var signupStyle = {
    display: "inline-block",
    padding: "32px 48px 0px 48px",
    border: "1px solid #EEE"
};

var but={
    background: '#c51162'
};

var but2={
    background: '#f8bbd0',
    margin: '0px 0px 20px ',
    
};
var color ={color: 'black'};
//create saved component

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };
        this.onUnameChange = this.onUnameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    onUnameChange(event) {
        this.setState({ name: event.target.value });
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ pass: event.target.value });
    }

    signUp(event) {
        event.preventDefault();
        axios.post('/signup', this.state)
            .then((res) => {
                console.log("data is ", res);
                this.props.history.push('/Portfolio');
                console.log("status" ,res.status);
            })
            .catch((err) => {

               alert("Email and Pass Fields are required! Please Try Again.");
                console.log('Error signing up: ', err);
             
                this.setState({ name: '',email: '', pass: '' });
            });
    }


    //onclick function /form submit

    render() {

        return (

            <div>

                <div className="center">
                    <h2>The Trade App<sup>®</sup></h2>
                    <div className="section"></div>
                    <h5 className="indigo-text">Creating Your Account</h5>
                    <div className="section"></div>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row" style={signupStyle}>
                            <form className="col s12" method="post" onSubmit={this.handleSubmit}>
                                <div className='row'>
                                    <div className='col s12'>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <p htmlFor='text'>User Name<input className='validate align-right' type='text' name='name' id='name' onChange={this.onUnameChange}/></p>
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
                                        <button type='submit'  style={but} className='col s12 btn btn-large' onClick={this.signUp}>Create</button>
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
module.exports = Signup;