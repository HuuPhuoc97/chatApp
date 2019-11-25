import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ItemFanPage from '../../components/ItemFanPage';
import ListFriend from '../../components/ListFriends';
// import * as actions from './actions';
import './index.css';

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
  const elementPage = list.map((item, index) => {
    return (
      <ItemFanPage
        key={index}
        urlImage={item.picture.data.url}
        userName={item.name}
      />
    );
  });

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
    <div id="page">
      <div className="col-xl-12  ml-auto py-2 header-page ">
        <div className="row ">
          <div className="col-md-4">
            <h4 className=" mb-0 mt-2"> Logo </h4>
          </div>
          <div className="col-md-5 input-group">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Tìm page..."
              onChange={onChangeSearch}
            />
            <button type="button" className="btn btn-light search-button">
              <i className="fa fa-search text-danger" />
            </button>
          </div>
          <div className="col-md-3 button-logout ">
            <img src={props.data.image} className="logo" alt="logo" />
            <span className="user-name">{props.data.name}</span>
            <button type="button" className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="body-page">
        <h5 className="p-2">CHỌN PAGE BẮT ĐẦU : </h5>
        <div className="row m-3">{elementPage}</div>
      </div>

    </div>
    // <ListFriend
    // />
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
