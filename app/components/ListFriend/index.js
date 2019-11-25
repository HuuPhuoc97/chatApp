import React, { useState } from 'react';
import './index.css';
function ListFriend(props) {
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
              onChange={props.onChangeSearch}
            />
            <button type="button" className="btn btn-light search-button">
              <i className="fa fa-search text-danger" />
            </button>
          </div>
          <div className="col-md-3 button-logout ">
            <img src={props.image} className="logo" alt="logo" />
            <span className="user-name">{props.name}</span>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="body-page">
        <h5 className="p-2">CHỌN PAGE BẮT ĐẦU : </h5>
        <div className="row m-3">{props.children}</div>
      </div>
    </div>
  );
}
export default ListFriend;
