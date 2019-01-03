var formElement = React.createClass({
    render: function() {

        return React.createElement("div", null, React.createElement(childElement, { 
            userName: this.props.userName, 
            dummyValue: this.props.dummyValue
         }));
    }
})