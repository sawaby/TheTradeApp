// include react
import React, { Component } from 'react';
var Link = require('react-router').Link;
var axios = require("axios");
import PropTypes from 'prop-types';
var navStyle={
    color: '#c51162'
}
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } = require('recharts');

const data = [
    { name: 'Pos A', low: 440000, high: 640000, amt: 2400 },
    { name: 'Pos B', low: 330000, high: 639833, amt: 2210 },
    { name: 'Pos C', low: 888000, high: 980030, amt: 2290 },
    { name: 'Pos D', low: 766540, high: 390833, amt: 2000 },
    { name: 'Pos E', low: 123450, high: 480030, amt: 2181 },
    { name: 'Pos F', low: 654300, high: 880660, amt: 2500 },
    { name: 'Pos G', low: 349000, high: 430000, amt: 2100 },
];
var cards = {
    background: '#ffebee'
}
//create saved component
class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            account: '$200,000',
            postition: 6,
            cash: '$234,243,54'
        }

        // this.ChartCall = this.ChartCall.bind(this);
    }


    render() {

        return (

            <div>

                <div className="section">
                    <div className="section">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li style={navStyle} className="tab col s3 active"><Link to="/Portfolio">Portfolio</Link></li>
                                    <li style={navStyle} className="tab col s3 active"><Link to="/Balances">Balances</Link></li>
                                    <li style={navStyle} className="tab col s3 active"><Link to="/Trading">Trading</Link></li>
                                    <li style={navStyle} className="tab col s3 active"><Link to="/Login">Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <div className="row">
                            <div className="col s12 m12">
                                <div style={cards} className="card">
                                    <div className="card-content">
                                        <div className="card-title">
                                            <div className="text-center">
                                                <b >Total Account Value</b>
                                            </div>
                                        </div>
                                        <div className="text-center">$123,565.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s4">
                        <div className="row">
                            <div className="col s12 m12">
                                <div style={cards} className="card">
                                    <div className="card-content">
                                        <div className="card-title">
                                            <div className="text-center">
                                                <b>Positions</b>
                                            </div>
                                        </div>
                                        <div className="text-center">7</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s4">
                        <div className="row">
                            <div className="col s12 m12">
                                <div style={cards} className="card">
                                    <div className="card-content">
                                        <div className="card-title">
                                            <div className="text-center">
                                                <b>Cash</b>
                                            </div>
                                        </div>
                                        <div className="text-center">$100,000.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<LineChart
                        width={900}
                        height={600}
                        data={data}
                        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                    </LineChart>*/}
                    <BarChart width={900} height={500} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="high" fill="#ef9a9a" />
                        <Bar dataKey="low" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>

        );
    }
};

// export component for use in other files
module.exports = Portfolio;