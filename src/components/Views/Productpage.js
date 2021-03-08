import React, { Component } from 'react'
import { Navbar,Footer, InnerBanner,Productpageview } from "../controll/index" 


export default class Productpage extends Component {
   
    render() {
        return (
            <div>
                  <Navbar />
                  <InnerBanner title="Product Page"  />
                    <Productpageview />
                  <Footer />
            </div>
        )
    }
}
