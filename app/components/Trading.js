// include react

var axios = require("axios");
import React, { Component } from 'react';
var Link = require('react-router').Link;
var color = {
    background: '#ffcdd2'
};
var cards = {
    background: '#ffebee'
};
var navStyle={
    color: '#c51162'
}
//create saved component
class Trading extends React.Component {
    constructor() {
        super();
        this.state = {
            reports: [],
            searchText: ''
        }
        this.search = this.search.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    updateStateReports(data) {
        const timesSeries = data['Time Series (Daily)'];
        const newReports = [];
        Object.keys(timesSeries).slice(0, 5).forEach((key, index) => {
            console.log(index);
            newReports.push(timesSeries[key])
        });
        this.setState({ reports: newReports });
    }

    getResultsElements() {

        const elements = this.state.reports.map((report, index) => {
            return (
                <div key={index} className="col s2">
                    <div className="card-panel"  style={cards}>
                        <div className="text-center">
                            <div>Day {index + 1} Price</div>
                            <div>{report['4. close']}</div>
                        </div>
                    </div>
                </div>
            );
        });
        return elements;
    }

    search(event) {
        event.preventDefault();
        const { searchText } = this.state;
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchText}&apikey=0X6T0ARD2UNWMQZG`)
            .then(res => {
                this.updateStateReports(res.data);
                
                console.log("api", res.data);
            })
            .catch(err => {
                return console.log(err);
            })
    }
    //detail api information
    detailAPInfo() {

        const Info = this.state.reports.map((report, index) => {
            return (
                <div className="row">
                    <div className="col s12" style={color}>
                    <p>Day {index + 1} Price Details</p>
                    </div>
                    <div className="col s6">
                        <table className="striped">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Open</td>
                                    <td className="text-right">{report['1. open']}</td>
                                </tr>
                                <tr>
                                    <td>High</td>
                                    <td className="text-right">{report['2. high']}</td>
                                </tr>
                                <tr>
                                    <td>Low</td>
                                    <td className="text-right">{report['3. low']}</td>
                                </tr>
                                <tr>
                                    <td>Adjusted Close</td>
                                    <td className="text-right">{report['5. adjusted close']}</td>
                                </tr>
                                <tr>
                                    <td>Average Volume (10 days)</td>
                                    <td className="text-right">27,818,610</td>
                                </tr>

                                <tr>
                                    <td>Market Cap</td>
                                    <td className="text-right">815.4 B</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col s6">
                        <table className="striped">
                            <thead>   
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shares Outstanding</td>
                                    <td className="text-right">5.2 B</td>
                                </tr>
                                <tr>
                                    <td>Beta</td>
                                    <td className="text-right">1.5</td>
                                </tr>
                                <tr>
                                    <td>Dividend Yield</td>
                                    <td className="text-right">1.60%</td>
                                </tr>
                                <tr>
                                    <td>Quarterly Yield</td>
                                    <td className="text-right">0.63</td>
                                </tr>
                                <tr>
                                    <td>Ex-Dividend Date</td>
                                    <td className="text-right">08/10/17</td>
                                </tr>
                                <tr>
                                    <td>Dividend Payable Date</td>
                                    <td className="text-right">08/17/17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        });
        return Info;
    }
    handleInputChange(event) {
        this.setState({ searchText: event.target.value });
    }

    render() {
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

                <div className="row">
                    <form className="col s12" onSubmit={this.search}>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate" value={this.state.searchText} onChange={this.handleInputChange} ></input>
                            <label htmlFor="icon_prefix"></label>
                        </div>
                        <div className="input-field col s6">
                            <a className="waves-effect waves-light btn" onClick={this.search}>Search</a>
                        </div>
                    </form>
                </div>
                {/* <div className="row">
                    <h5>Stock Name</h5>
                </div> */}
                <div className="row">
                    {this.getResultsElements()}
                </div>
                <div className="row">
                    {this.detailAPInfo()}
                </div>

            </div>

        );
    }

}

// export component for use in other files
module.exports = Trading;