// include react
var React = require("react");
var Link = require('react-router').Link;

//create saved component
var Nav = React.createClass({

    render: function () {

        return (

            <div>

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

            </div>

        );
    }
});

// export component for use in other files
module.exports = Nav;