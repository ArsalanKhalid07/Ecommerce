import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'


export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
           proceedButton : false,
           name:"",
           email:"",
           address:"" 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createOrder = (e) => {
      e.preventDefault();
      const order ={
          name: this.state.name,
          email: this.state.email,
          address: this.state.address,
          cartItems: this.props.cartItems,
      };  
      this.props.createOrder(order);
    }
    
    render() {
        const { cartItems } = this.props;
        const currency =(num) => {
            return (
                "$" + Number(num.toFixed(1)).toLocaleString() + "" 
            );
        }

        return (
            <>
            <div>
                <div className="order_number">
                        {
                            cartItems.length === 0 ?
                            <div className="cart-ui">Cart is empty</div> :
                            <div className="cart-ui">you have { cartItems.length } Order in your cart </div>
                        }
                 </div>
            </div>
            <Fade left>
            <div className="cart-style">
                <ul className="cart-items">
                    {cartItems.map(item => (
                            <li key={item._id}>
                                <div className="row flex-row">
                                    <div className="col-md-4">
                                        <div className="images">
                                            <p>Product Image</p>
                                          <img src={item.image} alt={item._id} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                         <div className="title">
                                            <p>Product Title</p>
                                             {item.title}
                                         </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="product-price">
                                                <p>Product Price</p>
                                             <h5>{currency(item.price) } x {item.count}</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                         <div className="product-remove">
                                                 <p>Product Price</p>
                                            <button onClick={()=>this.props.removeItem(item)}>Remove</button>
                                         </div>
                                    </div>
                                </div>
                            </li>
                    ))}
                </ul>
            </div>
            </Fade>
             <div className="proceed_btn"> 
                <div className="total_price">
                    Total: {" "}
                    {currency(
                        cartItems.reduce((a,c) => a + c.price * c.count , 0 )
                    )}
                </div> 
                <div className="proced">
                    <button onClick={() => { this.setState( {proceedButton:true} )}} >proceed to checkout</button>
                </div>
            </div>           
         
            {
             this.state.proceedButton  && 
                (
                <div className="proceed-form">
                    <Fade right>
                    <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Name</label>
                                    <input type="text"
                                     required
                                     name="name" 
                                     onChange={this.handleChange}>
                                     </input>
                                </li>
                                <li>
                                    <label>Email</label>
                                    <input type="email"
                                     required 
                                     name="email" 
                                     onChange={this.handleChange}>
                                     </input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input type="text"
                                     required 
                                     name="address" 
                                     onChange={this.handleChange}>
                                     </input>
                                </li>
                                <li>
                                    <button className="chkout-btn">Checkout</button>
                                </li>
                            </ul>
                    </form>
                    </Fade>

                </div>
                )
            }

            </>
        )
    }
}
