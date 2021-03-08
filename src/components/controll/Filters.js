import React, { Component } from 'react'

export default class Filters extends Component {
    render() {
        return (
            <div className="Filter">
                <div className="filter_count filter_set">
                    <h4>Products:</h4>
                    <span>{this.props.count}</span>
                </div>
                <div className="filter_sort filter_set">
                    <h4>Order:</h4>
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="">Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </div>
                <div className="filter_size filter_set">
                    <h4>Filter:</h4>
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XXL">XXL</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                        <option value="X">X</option>
                        <option value="M">M</option>
                    </select>
                </div>
                <div className="filter_set">
                     <h4>Like Us On Facebook:</h4>
                     <img src="/images/fb_img.jpg"></img>
                </div>
            </div>
        )
    }
}
