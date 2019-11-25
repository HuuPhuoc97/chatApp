import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';
function Login(props) {
  useEffect(() => {
    (function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    window.fbAsyncInit = () => {
      FB.init({
        appId: '413811969495076', // Change with your Facebook app id
        autoLogAppEvents: true,
        cookie: true,
        xfbml: true,
        version: 'v5.0',
      });

      FB.Event.subscribe('auth.statusChange', response => {
        if (response.authResponse) {
          checkLoginState();
        } else {
          console.log(
            '[FacebookLoginButton] User cancelled login or did not fully authorize.',
          );
        }
      });
    };
  });

  const checkLoginState = () => {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

  const login = () => {
    FB.login(checkLoginState(), {
      scope: 'email',
    });
  };

  const statusChangeCallback = response => {
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      console.log(
        '[FacebookLoginButton] Person is logged into Facebook but not your app',
      );
    } else {
      console.log('[FacebookLoginButton] Person is not logged into Facebook');
    }
  };

  const testAPI = () => {
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
      },
    );
  };
  console.log('data login', props.data);

  return (
    <div align="center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={login}
        // onlogin={checkLoginState}
      >
        Login FaceBook
      </button>

      {props.data !== null ? <Redirect to="/listfriend" /> : ''}
      {/* {props.data !== null ? <Redirect to="/listfanpage" /> : ''} */}
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
