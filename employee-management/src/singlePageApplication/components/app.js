
var React = require("react");
var createReactClass = require('create-react-class');
var HomePage = require("./homePage");
var UserList = require("./userList");
var UserDetails = require("./userDetails");
var Link = require('react-router-dom').Link;
var Route = require('react-router-dom').Route;
var Router = require('react-router-dom').Router;

var App = createReactClass({
    render: function() {
        return(
                <div className="menu">
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/messages">Messages</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                    </ul>
                    <div className="App-intro">
                        <Route exact path="/messages" component={UserDetails}/>
                        <Route exact path="/about" component={UserList}/>
                        <Route exact path="/" component={HomePage}/>
                    </div>
                </div>
        )
    }
});

module.exports = App;