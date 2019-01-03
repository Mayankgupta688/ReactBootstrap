var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./singlePageApplication/components/app");

var BrowserRouter = require("react-router-dom").BrowserRouter;

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);