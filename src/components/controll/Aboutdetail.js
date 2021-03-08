import React, { Component } from 'react'

export default class Aboutdetail extends Component {
    render() {
        return (
            <div>
                <div className="abt all-section">
                    <div className="container">
                        <div className="row flex-row">
                            <div className="col-md-6">
                                <div className="in_img">
                                    <img src="images/abt_img.jpg"></img>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="abt_content">
                                    <div className="heading">
                                        <h4>About Us</h4>
                                        <h2> Industrial Electrical Supply</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat.</p>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
