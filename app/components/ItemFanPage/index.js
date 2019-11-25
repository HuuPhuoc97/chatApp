import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
function ItemFanPage(props) {
  return (
    <div className="col-md-4 p-2">
      <div className="card ">
        <div className="card-body">
          <div className="d-flex ">
            <img src={props.urlImage} className="logo" alt="logo" />
            <h5>{props.userName}</h5>
          </div>
        </div>
        <div className="card-footer">
          <Link
            type="button"
            className="btn btn-info  float-right"
            to="/messenger"
          >
            Truy cập
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ItemFanPage;
