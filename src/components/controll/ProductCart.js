import React, { Component } from 'react';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';


export default class ProductCart extends Component {

    constructor(props){
        super(props);
        this.state = {
            Modal: null 
        }
    }
     openModal = (product) => {
        this.setState({product});
    };
    
     closeModal = (product) => {
        this.setState({product:null});
    }; 
    

  
    
    render() {
        const { product }  = this.state;
        const currency =(num) => {
            return (
                "$" + Number(num.toFixed(1)).toLocaleString() + "" 
            );
        }
        return (
            <div>
                <div className="container">
                <div className="row">
                    <div className="products product_card">
                            {this.props.products.map(
                            (product) => (
                                <div className="col-md-4">
                                <div key={product._id}>
                                    <div className="product" >
                                        <a href={"#" + product._id} onClick={() => this.openModal(product)}>    
                                            <img src={product.image} alt={product.title} ></img>
                                            <p>{product.title}</p>
                                            <p className="prod_text">{product.description}</p>
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                        </a>
                                        <div className="product_price">
                                            <div>{currency(product.price)}</div>
                                            <button onClick={() => this.props.addToCart(product)} className="primary-btn">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            )) }
                        </div>
                    </div>
                </div>
                    
                    { product &&
                        ( 
                        <Modal isOpen={true} onRequestClose={this.closeModal}>
                          <Zoom>
                                <button className="cross" onClick={this.closeModal}>x</button>
                                <div className="product-detail pd_modal">
                                    <div className="row flex-row">
                                        <div className="col-md-4">
                                        <img src={product.image} alt={product.title}></img>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product_description">
                                                <h4>{product.title}</h4>
                                                <p>{product.description}</p>
                                             </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="avaible_size">
                                        <p>Avaiable Size: {" "}</p>
                                        { product.availableSizes.map((x) => ( 
                                            <button className="avalible_Size">{x}</button>    
                                        ))}
                                    </div>
                                    <div className="product_price">
                                        {currency(product.price)}
                                    </div>
                                    <div className="prod_detail_btn">
                                        <button onClick={() => {
                                           this.props.addToCart(product)
                                            this.closeModal()
                                            }}
                                        >Add to Cart</button>
                                    </div>
                                        </div>
                                    </div>

                                </div>

                            </Zoom>  
                        </Modal>
                        )
                    }
            </div>
            
        )
    }
}
