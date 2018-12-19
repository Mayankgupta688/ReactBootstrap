var titleElement = React.createClass({

    getInitialState: function() {
        return { name: "Mayank" }
    }, 

    render: function() {

        console.log(this.state.name);
        return React.createElement("div", null, React.createElement(formElement, { 
            userName: this.state.name, 
            dummyValue: this.props.dummyValue
        }));
    }
});