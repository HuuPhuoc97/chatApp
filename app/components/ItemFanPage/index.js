import React, { useState } from 'react';
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
          <button type="button" className="btn btn-info  float-right">
            Truy cập
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemFanPage;
