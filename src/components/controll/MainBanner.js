import React, { Component } from 'react'

export default class MainBanner extends Component {
    render() {
        return (
            <>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="item active">
                    <div className="banner_img">
                        <img src="/images/img_1.png" alt="Los Angeles" />
                        <h2>Industrial  <span>Electrical Supply</span></h2>
                    </div>
                </div>
                <div className="item ">
                    <div className="banner_img">
                        <img src="/images/img_1.png" alt="Los Angeles" />
                        <h2>Industrial  <span>Electrical Supply</span></h2>
                    </div>
                </div>
                <div className="item ">
                    <div className="banner_img">
                        <img src="/images/img_1.png" alt="Los Angeles" />
                        <h2>Industrial  <span>Electrical Supply</span></h2>
                    </div>
                </div>

                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            </>
        )
    }
}
