import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './index.css';
import { Redirect } from 'react-router';
class Login extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  componentClicked = () => console.log('clicked');
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }
  // componentWillUpdate = () =>{
  //   if(this.state.isLoggedIn ){
  //     console.log('okok');

  //     // <Redirect to="/listfriend" />
  //   }
  // };
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px',
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="413811969495076"
          autoLoad
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook-square fa-2x"
        />
      );
    }

    return (
      <div className="login">
        {fbContent}

        {/* {this.state.isLoggedIn ? <Redirect to="/listfriend" />  */}

        {/* : <h>loi login</h>}  */}
      </div>
    );
  }
}

export default Login;
