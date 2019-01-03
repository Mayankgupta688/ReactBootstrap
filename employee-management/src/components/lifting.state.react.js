class UserInfoComponent extends React.Component {


    updateUserDetails(userName) {
        debugger;
        this.setState({
            userName: userName,
            userInfo: this.userData.filter(user => user.userName == userName)[0]
        })
    }

    constructor(props) {
        super(props);

        this.userData = [{
            userName: "Mayank",
            userAge: 20
        }, {
            userName: "Anshul",
            userAge: 10
        }];

        this.state = {
            userName: 'Mayank',
            userInfo: this.userData[0]
        }
        this.updateUserDetails = this.updateUserDetails.bind(this)
    }
    render() {
        return (
            <div>
                <div>User Info Management System:</div><br></br>
                <p>Selected User: {this.state.userName}</p>
                <UserNameUpdateComponent userName={this.state.userName} onUpdateUserDetails={this.updateUserDetails} /><br></br>
                <UserDetails userInfo={this.state.userInfo} />
            </div>
        )
    }
}

class UserNameUpdateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.updateUser = this.updateUser.bind(this);
        this.setUserName = this.setUserName.bind(this);

        this.state = {
            userNameInfo: this.props.userName
        }
    }

    setUserName(event) {
        this.setState({
            userNameInfo: event.target.value
        });
    }

    updateUser() {
        this.props.onUpdateUserDetails(this.state.userNameInfo);
    }
    render() {
        return (
            <div>
                <h1>Child Component to Update User</h1>
                <h2>Info For the User: {this.state.userNameInfo}</h2><br></br><br></br>
                <input type="text" value={this.state.userNameInfo} onChange={this.setUserName} /><br></br><br></br>
                <input type="button" onClick={this.updateUser} value="Update User" />
            </div>
        )
    }
}

class UserDetails extends React.Component {

    constructor(props) {
        console.dir(props)
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Child Component for User Information Details:</h1>

                <h2>Selected User: {this.props.userInfo.userName}</h2>
                <p>
                    User Name: {this.props.userInfo.userName}
                </p>
                <p>
                    User Age: {this.props.userInfo.userAge}
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <UserInfoComponent />,
    document.getElementById("reactBootstrap")
)