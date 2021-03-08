import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row" >
                            <div className="col-md-3"> 
                                <div className="footer_list">
                                    <img src="./images/footer_logo_2.png"></img>
                                    <p>Lorem ipsum dolor sit , adipiscing incididunt ut labore et dolore magna aliqua. Ut enim</p>
                                    <ul>
                                        <li>
                                            <i className="fa fa-map-marker"></i>
                                            <span>1225 Remington Ave .Scranton PA 18505</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                            <span>etucker@rvelectricsupply.com</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone"></i>
                                            <span>646-358-5643</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer_listing">
                                    <h2>Quick Links</h2>
                                    <ul>
                                        <li>
                                            <a href="">Home</a>
                                        </li>
                                        <li>
                                            <a href="">About</a>
                                        </li>
                                        <li>
                                            <a href="">Cart</a>
                                        </li>
                                        <li>
                                            <a href="">products</a>
                                        </li>
                                        <li>
                                            <a href="">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer_listing">
                                    <h2>Products</h2>
                                    <ul>
                                        <li>
                                            <a href="">Lorem Ipsum</a>
                                        </li>
                                        <li>
                                            <a href="">Lorem Ipsum</a>
                                        </li>
                                        <li>
                                            <a href="">Lorem Ipsum</a>
                                        </li>
                                        <li>
                                            <a href="">Lorem Ipsum</a>
                                        </li>
                                        <li>
                                            <a href="">Lorem Ipsum</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer_listing">
                                    <h2>Contact Info</h2>
                                    <form className="form_space">
                                        <div className="footer-form">
                                            <input type="text" placeholder="Name"></input>
                                        </div>
                                        <div className="footer-form">
                                            <input type="text" placeholder="Email"></input>
                                        </div>
                                        <div className="footer-form">
                                            <textarea placeholder="Message"></textarea>
                                        </div>
                                        <div className="footer-form">
                                            <button>Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
