import React from "react";
import { Link } from "react-router-dom";

export const Header =({ cartCount }) => {
    return (
        <>
            <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img width="150px" src="../images/logo.png" />
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0  ">
        {/* <button className="btn" id="login_btn">Login</button> */}
        
        {/* <Link >
        <button className="btn cart" > Sign up</button>
                </Link> */}
                <Link to={`/Cart`} className="ml-1 btn cart" id="cart_count">
            Cart ({cartCount})
          </Link>
      </div>
    </nav>
        </>
    )
}