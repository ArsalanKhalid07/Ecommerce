import React, { Component } from 'react'
import Data from "../../data.json";
import { Filters, ProductCart } from "../controll/index"


export default class Productpageview extends Component {
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


        sortProducts = (event) => {
            //implement size here
            const sort= event.target.value;
            this.setState(()=> ({
                sort:sort,
                products:this.state.products.slice().sort((a,b)=> (
                    sort === "Lowest" ?
                    ((a.price > b.price )? 1 : -1): 
                    sort === "Highest" ? 
                    ((a.price < b.price )? 1:-1):
                    ((a._id > b._id)? 1 : -1 )                
                
                ))
            }));
        }  
    
    
        filterProducts = (event) => {
            //implement sort here 
            if(event.target.value === "") {
                this.setState({
                    size:event.target.value,
                    products:Data.products
                });
            } else {
                this.setState({
                    size:event.target.value,
                    products:Data.products.filter(
                        (product)=> product.availableSizes.indexOf(event.target.value) >= 0 
                    ),
                })  
            }
    
        }
 
    render() {

        
        return (
            <div className="">
                <div className="width-set">
                    <div className="row">
                        <div className="col-md-3">
                        <Filters count={this.state.products.length}  
                                    size={this.state.size}
                                    sort={this.state.sort}
                                    filterProducts = {this.filterProducts}
                                    sortProducts = {this.sortProducts}
                                    /> 
                        </div>  
                        <div className="col-md-9">
                            <ProductCart  products={this.state.products} addToCart={this.addToCart} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
