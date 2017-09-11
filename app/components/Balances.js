// include react
var React = require("react");
var Link = require('react-router').Link;
var color = {
    background: '#ffcdd2',
    padding: '20px'
};
var navStyle={
    color: '#c51162'
}
//create saved component
var Balances = React.createClass({

    render: function () {

        return (

            <div>

                <div className="section">
                    <div className="section">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li style={navStyle} className="tab col s3"><Link to="/Portfolio">Portfolio</Link></li>
                                    <li style={navStyle} className="tab col s3"><Link to="/Balances">Balances</Link></li>
                                    <li style={navStyle} className="tab col s3"><Link to="/Trading">Trading</Link></li>
                                    <li style={navStyle} className="tab col s3"><Link to="/Login">Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <h5 style={color}>Portfolio Value</h5>
                </div>

                <div className="row">
                    <div className="col s9">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Portfolio Value</td>
                                    <td className="text-right">$123,565.00</td>
                                </tr>
                                <tr>
                                    <td>Stock Positions</td>
                                    <td className="text-right">6</td>
                                </tr>
                                <tr>
                                    <td>Cash Balance</td>
                                    <td className="text-right">$100,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <h5  style={color}>Additional Information</h5>
                </div>
                <div className="row">
                    <div className="col s9">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Pending Purchases</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                                <tr>
                                    <td>Cash Balance</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                                <tr>
                                    <td>Margin Balance</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        );
    }
});

// export component for use in other files
module.exports = Balances;