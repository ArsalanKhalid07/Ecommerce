import React, { Component } from 'react'
import { Navbar,Product,Newsletter,MainBanner , Heading , ProductCart, Collection, Footer} from "../controll/index"
import Data from "../../data.json";
// import { Collection } from 'mongoose';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:Data.products,
            cartItems: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")): [],
            sort: '',
            size:''
        }
    
    }

    addToCart= (product) => {
        const cartItems = this.state.cartItems.slice();
        
        let alreadyInCart = false;
        cartItems.forEach(item =>{
             if(item._id === product._id ) {
                 item.count++;
                 alreadyInCart = true
             }
        })

        //if no product found then add in cartItems
        if(!alreadyInCart) {
                cartItems.push({...product, count: 1 });
         }
            this.setState({cartItems});  
  
         //add data into localstorage 
          localStorage.setItem("cartItem",JSON.stringify(cartItems));

        }   

    render() {
        return (
            <div>
                <Navbar />
                <MainBanner />
                <Heading title="Our Product" description="Lorem ipsum dolor sit amet,adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <ProductCart  products={this.state.products} addToCart={this.addToCart} />
                <Heading title="Our Collection" description="Lorem ipsum dolor sit amet,adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <Collection />
                <Newsletter />
                <Footer />
            </div>
        )
    }
}
