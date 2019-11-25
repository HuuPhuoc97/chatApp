import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';
function Login(props) {
  useEffect(() => {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
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
        appId: '413811969495076', //Change with your Facebook app id
        autoLogAppEvents: true,
        cookie : true,
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

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  // const testAPI = () => {
  //   console.log('Welcome! Fetching your information.... ');
  //   FB.api(
  //     '/me',
  //     {
  //       fields:
  //         'id,name,picture{url},friends{name,picture},accounts{name,picture}',
  //     },
  //     function(res) {
  //       console.log('Successful login for: ', res);
  //       const info = {
  //         id: res.id,
  //         name: res.name,
  //         image: res.picture.data.url,
  //         listFriend: res.friends.data,
  //         listPage: res.accounts.data,
  //       };
  //       props.onSetAccount(info);
  //       // document.getElementById('status').innerHTML =
  //       //   'Thanks for logging in, ' + response.name + '!';
  //     },
  //   );
  // };

  // // This is called with the results from from FB.getLoginStatus().
  // const statusChangeCallback = response => {
  //   console.log('ok', response);
    
  //   if (response.status === 'connected') {
  //     // Logged into your app and Facebook.
  //     testAPI();
  //   }
  // };

  // const checkLoginState = (response) => {
  //   console.log('checkLoginState', response);
    
  //   FB.getLoginStatus(function(response) {
  //     console.log(response);
      
  //     statusChangeCallback(response);
  //   });
  // };

  // const login = () => {

  //   FB.login(function(response) {
  //     // handle the response
  //     console.log('trang thai login', response);
  //     checkLoginState(response);
  //   })

  //   // FB.login(function(response) {
  //   //   if (response.authResponse) {
  //   //     data1 = response;
  //   //     console.log('olala', response);
  //   //     //  FB.api('/me', function(response) {
  //   //     //    console.log('Good to see you, ' + response.name + '.');
  //   //     //  });
  //   //     <Redirect to="#" />;
  //   //   } else {
  //   //     console.log('chưa đăng nhập');
  //   //   }
  //   // });
  //   // FB.login(checkLoginState());
  // };
  // const logout = () => {

  //   FB.logout(function(response) {

  //     console.log('response logout',  response.authResponse.status);

  //     console.log('trang thai logout', response);
  //   });
  // };

  const checkLoginState = () => {
    FB.getLoginStatus(
      function(response) {
        statusChangeCallback(response);
      }.bind(this),
    );
  }

  const login = () => {
    FB.login(checkLoginState(), {
      scope: 'email',
    });
  }

  const statusChangeCallback = (response)=> {
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      console.log(
        '[FacebookLoginButton] Person is logged into Facebook but not your app',
      );
    } else {
      console.log('[FacebookLoginButton] Person is not logged into Facebook');
    }
  }

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
  }
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

      {/* <br />
      <Link to="/listfriend">friends</Link>
      <br />
      <Link to="/listfanpage">fan page</Link> */}
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
