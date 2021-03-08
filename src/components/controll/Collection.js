import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Collection extends Component {
    render() {
        return (
            <div>
                <div className="collection">
                    <div className="">
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/product">
                                    <img className="img-responsive" src="/images/col_1.png"></img>                                  
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <div className="img_collect">
                                    <Link to="/product" className="img_collect_space">
                                        <img className="img-responsive" src="/images/col_2.png"></img>                                  
                                    </Link>
                                    <Link to="/product" >
                                        <img className="img-responsive" src="/images/col_3.png"></img>                                  
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <Link to="/product" 
                                >
                                    <img className="img-responsive" src="/images/col_4.png"></img>                                  
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
