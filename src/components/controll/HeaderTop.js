import React, { Component } from 'react'
import {Link } from "react-router-dom"

export default class HeaderTop extends Component {
    render() {
        return (
            <>
            <div className="header_top">
                <p>Free Shipping on Orders Over $50</p>
            </div>
            <div className="header-middle">
                <div className="container">
                    <div className="row flex-row" >
                        <div className="col-md-3">
                            <div className="mainLogo">
                                <Link to="/"><img src="./images/main_logo.png" ></img></Link>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="acounts">
                                <div className="login">
                                    <div className="acounts_log">
                                       <i className="fa fa-user"></i>
                                     </div>
                                      <p>Login</p>
                                </div>
                                <div className="login">
                                <Link to="/cartpage">
                                    <div className="acounts_log">
                                       <i className="fa fa-shopping-cart"></i>
                                     </div>
                                      <p>My Cart</p>
                                      </Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
