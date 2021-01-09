import React from 'react';
import Greeting from './Greeting';
import Mailbox from './Mailbox';

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let mailbox;
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
            mailbox = <Mailbox unreadMessages={messages} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                {mailbox}
            </div>
        );
    }
}

export default LoginControl;