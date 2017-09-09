// include react
var React = require("react");
var axios = require("axios");
var Link = require('react-router').Link;

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
            newReports.push(timesSeries[key])
        });
        this.setState({ reports: newReports });
    }

    getResultsElements() {
        const elements = this.state.reports.map((report, index) => {
            return (
                <div key={index} className="col s2">
                    <div className="card-panel">
                        <div className="text-center">
                            <div>Last Price</div>
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
            })
            .catch(err => {
                return console.log(err);
            })
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
                                    <li className="tab col s3"><Link to="/Portfolio">Portfolio</Link></li>
                                    <li className="tab col s3"><Link to="/Balances">Balances</Link></li>
                                    <li className="tab col s3"><Link to="/Trading">Trading</Link></li>
                                    <li className="tab col s3"><Link to="/Login">Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <form className="col s12" onSubmit={this.search}>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate" value={this.state.searchText} onChange={this.handleInputChange} />
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
                    <div className="col s6">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Open</td>
                                    <td className="text-right">157.86</td>
                                </tr>
                                <tr>
                                    <td>Previous Close</td>
                                    <td className="text-right">157.86</td>
                                </tr>
                                <tr>
                                    <td>52 - Week Range</td>
                                    <td className="text-right">102.53 - 162.51</td>
                                </tr>
                                <tr>
                                    <td>Average Volume (10 days)</td>
                                    <td className="text-right">27,818,610</td>
                                </tr>
                                <tr>
                                    <td>P/E (Trailing 12 mo.)</td>
                                    <td className="text-right">17.90x</td>
                                </tr>
                                <tr>
                                    <td>EPS (Trailing 12 mo.)</td>
                                    <td className="text-right">8.82</td>
                                </tr>
                                <tr>
                                    <td>Next Earnings Date</td>
                                    <td className="text-right">10/23/17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col s6">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Market Cap</td>
                                    <td className="text-right">815.4 B</td>
                                </tr>
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

            </div>

        );
    }
}

// export component for use in other files
module.exports = Trading;