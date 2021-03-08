import React from 'react'
import { HeaderTop } from '.';
import {Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
        <HeaderTop />
        <div className="">
            <nav class="navbar navbar-inverse">
                    <div class="navbar-header">
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    </div>
                    <div id="navbarCollapse" class="collapse navbar-collapse">
                    
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/product">Products</a></li>
                        <li><Link to="/cartpage">Cart</Link></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    </div>
            </nav>
           
        </div>
      
        </div>
    )
}
