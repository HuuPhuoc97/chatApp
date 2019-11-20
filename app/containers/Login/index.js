import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';
function Login(props) {
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '413811969495076',
        cookie: true,
        xfbml: true,
        version: 'v5.0',
      });
      // FB.AppEvents.logPageView();
      // FB.Event.subscribe('auth.statusChange', function(response) {
      //   if (response.authResponse) {
      //     this.checkLoginState();
      //   } else {
      //     console.log('---->User cancelled login or did not fully authorize.');
      //   }
      // }.bind(this));
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  const testAPI = () => {
    console.log('Welcome! Fetching your information.... ');
    FB.api(
      '/me',
      {
        fields:
          'id,name,picture{url},friends{name,picture},accounts{name,picture}',
      },
      function(res) {
        console.log('Successful login for: ', res);
        const info = {
          id: res.id,
          name: res.name,
          image: res.picture.data.url,
          listFriend: res.friends.data,
          listPage: res.accounts.data,
        };
        props.onSetAccount(info);
        // document.getElementById('status').innerHTML =
        //   'Thanks for logging in, ' + response.name + '!';
      },
    );
  };

  // This is called with the results from from FB.getLoginStatus().
  const statusChangeCallback = response => {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
      console.log('okok');
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML =
        'Please log ' + 'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML =
        'Please log ' + 'into Facebook.';
    }
  };

  const checkLoginState = () => {
    // ktra đăng nhập
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      console.log('ok123123123', response);
    });
  };

  const handleClick = () => {
    // FB.login(this.checkLoginState());
    // FB.login(function(response) {
    //   // handle the response
    //   console.log('trang thai login', response);

    // })
    let data1;
    FB.login(function(response) {
      if (response.authResponse) {
        data1 = response;
        console.log('olala', response);
        //  FB.api('/me', function(response) {
        //    console.log('Good to see you, ' + response.name + '.');
        //  });
        <Redirect to="#" />;
      } else {
        console.log('chưa đăng nhập');
      }
    });
    // this.setState({
    //   data: data1,
    // });
  };
  const logout = () => {
    let data1;
    FB.logout(function(response) {
      // handle the response
      data1 = response.authResponse.status;
      console.log('response logout', typeof response.authResponse.status);

      console.log('trang thai logout', response);
    });
    // this.setState({
    //   data: data1,
    // });
  };
  console.log('render', props.data);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
        onlogin={checkLoginState}
      >
        Login
      </button>

      <button type="button" className="btn btn-danger" onClick={logout}>
        logout
      </button>

      <button type="button" className="btn btn-success" onClick={testAPI}>
        ListPage
      </button>

      {props.data !== null ? <Redirect to="/listfriend" /> : ''}
    </div>
  );
}
const mapStateToProps = (state, props) => ({
  data: state.login.account,
});
const mapDispatchToProps = (dispatch, props) => ({
  onSetAccount: value => dispatch(actions.setAccount(value)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
