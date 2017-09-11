// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Trading = require("../components/Trading");
var Balances = require("../components/Balances");
var Portfolio = require("../components/Portfolio");
var Login = require("../components/Login");
var Signup = require("../components/Signup");
var Nav = require("../components/Nav");
//var Modal = require("../components/modal");

// Export the Routes
var Routes = React.createClass({
    render() {
        return (
            // High level component is the Router component.
            <Router history={browserHistory}>
                <Route path="/" component={Main}>

                    {/* If user selects Search or Saved show the appropriate component */}
                    <Route path="Balances" component={Balances} />
                    <Route path="Portfolio" component={Portfolio} />
                    <Route path="Trading" component={Trading} />
                    <Route path="Login" component={Login} />
                    <Route path="Signup" component={Signup} />

                    {/* If user selects any other path... we get the Home Route */}
                    <IndexRoute component={Login} />

                </Route>
            </Router>
        )
    }
})
module.exports = Routes;

