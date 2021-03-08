import React, { Component } from 'react'
import { Contactform, Navbar ,InnerBanner, Footer } from '../controll'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <InnerBanner title="Contact us" />
                <Contactform />
                <Footer />
            </div>
        )
    }
}
