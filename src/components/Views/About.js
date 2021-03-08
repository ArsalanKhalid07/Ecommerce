import React, { Component } from 'react'
import { Footer, InnerBanner, Navbar, Newsletter,Aboutdetail } from '../controll/index'

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <InnerBanner title={"About Us"} />
                <Aboutdetail />
                <Newsletter />
                <Footer />
            </div>
        )
    }
}
