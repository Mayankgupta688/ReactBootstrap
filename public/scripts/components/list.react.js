class DisplayList extends React.Component {

    constructor(props) {
        super(props);
        this.changeDataValues = this.changeDataValues.bind(this);

        this.state = {
            numbers: [1, 2, 3, 4, 5]
        }
    }

    changeDataValues() {
        this.setState({
            numbers: [5, 6, 7, 8, 9, 10]
        }) 
    }

    render() {
        return <div>
            <ListPresenter numbers={this.state.numbers} /><br></br>
            <input type="button" value="Click To Change Value" onClick={this.changeDataValues}></input>
        </div>
    }
}

class ListPresenter extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        var lisplayListData = this.props.numbers.map(number =>
            <div key={number}><span><b>The selected number is {number}</b></span></div>
        )

        return <div>
            {lisplayListData}
        </div>
    }
}

ReactDOM.render(
    <DisplayList />,
    document.getElementById("reactBootstrap")
)