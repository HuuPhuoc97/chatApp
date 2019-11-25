import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ItemFanPage from '../../components/ItemFanPage';
import ListFriend from '../../components/ListFriend';
// import * as actions from './actions';
// import './index.css';

function ListFriendContainer(props) {
  const [keyword, setKeyword] = useState('');
  let list = props.data.listFriend;
  console.log('list ', list);
  if (keyword !== '') {
    console.log(keyword);

    list = list.filter(
      item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1,
    );
    console.log(list);
  }
  const onChangeSearch = event => {
    const { target } = event;
    setKeyword(target.value);
  };
  const elementPage = list.map((item, index) => (
    <ItemFanPage
      key={index}
      urlImage={item.picture.data.url}
      userName={item.name}
    />
  ));
  const showFriend = () => {
    let result = null;
    if (list.length > 0) {
      result = list.map((item, index) => (
        <ItemFanPage
          key={index}
          urlImage={item.picture.data.url}
          userName={item.name}
        />
      ));
    }
    return result;
  };

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

  const logout = () => {
    FB.logout(function(response) {
      console.log('response logout', response.authResponse.status);

      console.log('trang thai logout', response);
      // props.onSetAccount(null);
    });
  };
  return (
    <ListFriend
      image={props.data.image}
      name={props.data.name}
      logout={logout}
      onChangeSearch={onChangeSearch}
    >
      {showFriend()}
    </ListFriend>
  );
}
const mapStateToProps = (state, props) => ({
  data: state.login.account,
});
const mapDispatchToProps = (dispatch, props) => ({
  // onSetAccount: value => dispatch(actions.setAccount(value)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListFriendContainer);
