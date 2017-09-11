// include react
var React = require("react");

// include link from react router to navigate without page reloads
var Link = require("react-router").Link;

// include all the sub-components
var Balances = require("./Balances");
var Login = require("./Login");
var Portfolio = require("./Portfolio");
var Trading = require("./Trading");
var Nav = require("./Nav");
var Signup = require("./Signup");
// var Modal = require("./modal");
var headerColor ={background: '#c51162'};
// require helper for api calls
//var helpers = require("../utils/helpers");

//create main component
var Main = React.createClass({

    render: function () {

        return (

            <div>
                <main>
                    <nav style={headerColor}>
                        <div className="nav-wrapper">
                            <a href="#"  className="brand-logo">The Trade App<sup>®</sup></a>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="section"></div>
                        {/* <div className="section">
                            <div className="section">
                                <div className="row">
                                    <div className="col s12">
                                        <ul className="tabs">
                                            <li className="tab col s3"><Link to="/Portfolio">Portfolio</Link></li>
                                            <li className="tab col s3"><Link to="/Balances">Balances</Link></li>
                                            <li className="tab col s3"><Link to="/Trading">Trading</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <Login /> */}

                        {/* <Nav /> */}

                        {this.props.children}

                    </div>
                </main>
            </div>
        );
    }
});

// export component for use in other files
module.exports = Main;