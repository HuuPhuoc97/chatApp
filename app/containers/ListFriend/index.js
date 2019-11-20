import React from 'react';
import { connect } from 'react-redux';
// import * as actions from './actions';
import './index.css';
// import logo from './../../images/123.jpg';
function ListFriend(props) {
  console.log(props.data);
  const list = props.data.listPage;
  console.log(list);
  const elementPage = list.map((page, index) => {
    console.log(page);

    return (
      <div className="col-md-4 p-2">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex ">
              <img src={page.picture.data.url} className="logo" alt="logo" />
              <h5>{page.name}</h5>
            </div>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-info  float-right">
              Truy cập
            </button>
          </div>
        </div>
      </div>
    );
  });
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
            />
            <button type="button" className="btn btn-light search-button">
              <i className="fa fa-search text-danger" />
            </button>
          </div>
          <div className="col-md-3 button-logout ">
            <img
              src={`https://graph.facebook.com/${
                props.data.id
              }/picture?type=large`}
              className="logo"
              alt="logo"
            />
            <span className="user-name">{props.data.name}</span>
            <button type="button" className="btn btn-primary">
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
  );
}
const mapStateToProps = (state, props) => ({
  data: state.login.account,
});
const mapDispatchToProps = (dispatch, props) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListFriend);
