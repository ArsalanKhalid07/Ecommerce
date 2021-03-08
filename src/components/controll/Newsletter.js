import React, { Component } from 'react'
import {Heading } from "../controll"

export default class Newsletter extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                      <Heading title="Join Our Newsletter Now" description="Lorem ipsum dolor sit amet,adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    </div>
                    <div className="row">
                        <div className="col-md-10 center-col ">
                            <div className="newsLetter">
                                <input type="text"></input>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
