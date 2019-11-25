import React from 'react';
import './index.css';
import logo from './download.png';

function Messenger() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-xl-12 py-1 bg-success  ">
          <div className="row algin-items-center">
            {/* <div className="col-md-4">
              <h4 className=""> = </h4>
            </div> */}
            <div className="col-md-11 text-center">
              <h5> Minh Chiến Khoa </h5>
            </div>
            <div className="col-md-1 row ">
              <h5>
                <i
                  className="fa fa-envelope-o text-light mr-2 "
                  aria-hidden="true"
                />
              </h5>
              <h5>
                <i
                  className="fa fa-star-o text-light mr-2 "
                  aria-hidden="true"
                />
              </h5>
              <h5>
                <i className="fa fa-check text-light" aria-hidden="true" />
              </h5>
            </div>
          </div>
        </div>

        <div className="col-sm-3 side">
          <div className="side-one">
            <div className="row m-2">
              <div className="col-sm-12 searchBox-inner">
                <div className="form-group has-feedback">
                  <input
                    id="searchText"
                    type="text"
                    className="form-control"
                    name="searchText"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>

            <div
              data-spy="scroll"
              data-target="#myScrollspy"
              data-offset="10"
              className="abc"
            >
              <div className="col-md-12   ">
                <ul className="navbar-nav ">
                  <li className="nav-item px-2 py-4 nav-link ">
                    <div className=" row">
                      <div className="col-md-2">
                        <img src={logo} className="logo" alt="logo" />
                      </div>
                      <div className="col-md-6 d-flex flex-column ">
                        <span>John Doe</span>
                        <span>xin cam on!...</span>
                      </div>
                      <div className=" col-md-4  text-muted ">18:18</div>
                    </div>
                  </li>
                  <li className="nav-item px-2 py-4 nav-link ">
                    <div className=" row">
                      <div className="col-md-2">
                        <img src={logo} className="logo" alt="logo" />
                      </div>
                      <div className="col-md-6 d-flex flex-column ">
                        <span>John Doe</span>
                        <span>xin cam on!...</span>
                      </div>
                      <div className=" col-md-4  text-muted ">18:18</div>
                    </div>
                  </li>
                  <li className="nav-item px-2 py-4 nav-link ">
                    <div className=" row">
                      <div className="col-md-2">
                        <img src={logo} className="logo" alt="logo" />{' '}
                      </div>
                      <div className="col-md-6 d-flex flex-column ">
                        <span>John Doe</span>
                        <span>xin cam on!...</span>
                      </div>
                      <div className=" col-md-4  text-muted ">18:18</div>
                    </div>
                  </li>
                  <li className="nav-item px-2 py-4 nav-link ">
                    <div className=" row">
                      <div className="col-md-2">
                        <img src={logo} className="logo" alt="logo" />{' '}
                      </div>
                      <div className="col-md-6 d-flex flex-column ">
                        <span>John Doe</span>
                        <span>xin cam on!...</span>
                      </div>
                      <div className=" col-md-4  text-muted ">18:18</div>
                    </div>
                  </li>
                  <li className="nav-item px-2 py-4 nav-link ">
                    <div className=" row">
                      <div className="col-md-2">
                        <img src={logo} className="logo" alt="logo" />{' '}
                      </div>
                      <div className="col-md-6 d-flex flex-column ">
                        <span>John Doe</span>
                        <span>xin cam on!...</span>
                      </div>
                      <div className=" col-md-4  text-muted ">18:18</div>
                    </div>
                  </li>
                  <li className="nav-item px-2 py-4 nav-link ">
                    <div className=" row">
                      <div className="col-md-2">
                        <img src={logo} className="logo" alt="logo" />{' '}
                      </div>
                      <div className="col-md-6 d-flex flex-column ">
                        <span>John Doe</span>
                        <span>xin cam on!...</span>
                      </div>
                      <div className=" col-md-4  text-muted ">18:18</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7 ">
          <div
            className="row col-md-12"
            data-spy="scroll"
            data-offset="10"
            className="abc"
          >
            <ul className=" navbar-nav  ">
              <li className=" nav-item m-2 row ">
                <span className=" nav-item bg-info rounded p-1">
                  Hi Thanh 1qqqqqqqqqqqqqqqq !
                </span>
              </li>
              <li className="nav-item row m-2 messenger-right  ">
                <div className=" bg-info rounded p-1 ">
                  Hi Thanh24ssssssss5!{' '}
                </div>
              </li>
              <li className=" nav-item row m-2 ">
                <div className=" bg-info rounded p-1">Hi Thanh 3! </div>
              </li>
              <li className=" nav-item m-2 row messenger-right">
                <span className=" nav-item bg-info rounded p-1">
                  Hi Thanh 4556666xxxxxxxxxxxxxxxxxxxxxxx33322 !
                </span>
              </li>
            </ul>
          </div>

          <div className="row reply">
            <div className="col-md-12 reply-main">
              <textarea
                className="form-control p-4"
                rows="1"
                id="comment"
                placeholder="comment..."
              />
            </div>
          </div>
        </div>
        <div className="col-md-2 border px-1 ">
          <div className="py-3 info ">
            <img src={logo} className="logo-info" alt="logo" />
            <h4 className="py-3 m-0"> Mai Chiến Khoa</h4>
            <span className=" text-muted "> Nam </span>
          </div>
          <div className=" d-flex flex-column px-2">
            <span> Email : </span>
            <span> SĐT : </span>
            <span> Địa Chỉ : </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messenger;
