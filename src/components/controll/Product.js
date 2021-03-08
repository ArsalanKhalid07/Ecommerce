import React, { Component } from 'react'
import { Cart, ProductCart } from '.';
import Data from '../../data.json'
import Filters from './Filters';
import Fade from 'react-reveal/Fade';



export default class Product extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            products:Data.products,
            cartItems: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")): [],
            sort: '',
            size:''
        }
    
    }


    createOrder = (order) => {
        alert("this value is salve" + order.name );
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


    removeItem = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems:cartItems.filter( (x) => x._id !==  product._id )
        });
        localStorage.setItem("cartItem",
        JSON.stringify(cartItems.filter( (x) => x._id !==  product._id )));
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
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                    <Filters count={this.state.products.length}  
                                    size={this.state.size}
                                    sort={this.state.sort}
                                    filterProducts = {this.filterProducts}
                                    sortProducts = {this.sortProducts}
                                    />  
                            </div>
                        </div>
                            <Fade bottom>
                             <ProductCart  products={this.state.products} addToCart={this.addToCart} />
                             </Fade>
                    </div>
                    <div className="col-md-4">
                           <Cart cartItems={this.state.cartItems} removeItem={this.removeItem} createOrder={this.createOrder}  />
                    </div>
                </div>
              
            </div>
            </div>
        )
    }
}
