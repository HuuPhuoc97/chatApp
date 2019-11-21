import React , {useState} from 'react';
import { connect } from 'react-redux';
// import * as actions from './actions';
import './index.css';
// import logo from './../../images/123.jpg';
function ListFanPage(props) {
  const [keyword, setKeyword] = useState('');
  console.log(props.data);
  var list = props.data.listPage;
  console.log(list);
  if (keyword !== "") {
    console.log(keyword);
    
    list = list.filter(item => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log(list);
  }
  var elementPage = list.map((item, index) => {
    console.log(item);
    return (
      <div className="col-md-4 p-2">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex ">
              <img src={item.picture.data.url} className="logo" alt="logo" />
              <h5>{item.name}</h5>
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
  const onChangeSearch = event => {
    var target = event.target;
    setKeyword(target.value);
  };
  // console.log(keyword);
  if (keyword !== "") {
    console.log(keyword);
    
    list = list.filter(item => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
  }
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
            <img
              src={props.data.image}
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
)(ListFanPage);
