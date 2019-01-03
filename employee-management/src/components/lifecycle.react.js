class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Mayank",
            designation: "Developer",
            attemptCount: 0
        }
    }

    componentDidMount() {
        setInterval(() => this.updateAttempt(), 1000);
    }

    updateAttempt() {
        debugger;
        this.setState((state, props) => {
            return {
                attemptCount: state.attemptCount + 1
            }
        })
    }

    render() {
        return (
            <div>
                <div>Hello World</div><br></br>
                <div>The Time is: {this.state.userName + " " + this.state.designation}</div><br></br>
                <div>Attempt Count: {this.state.attemptCount}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("reactBootstrap")
)