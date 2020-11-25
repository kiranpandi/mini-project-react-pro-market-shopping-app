import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CartPage extends Component {



    renderItems = () => {
        const data = this.props.cartItems;
        const mapRows = data.map( cartItem => (
            <div key={cartItem.id} className="cart-item">
            <div><img src={cartItem.image} className="cart-image"/></div>
            <div className="item-name">{cartItem.name}</div>
            <div className="item-price">{cartItem.price}</div>
            </div>
        ));
        return mapRows;
    }

    findTotal = () => {
        const data = this.props.cartItems;
        const total = data.reduce( function(total,cartItem){
            return total + cartItem.price;
        },0 );
        return total;
    }

    render() {
        const cartItems = this.props.cartItems;
        console.log('items',cartItems);
        return (
            <>
            <div className="cart-heading">
                <p>Image</p>
                <p>Name</p>
                <p>Price</p>
            </div>
            <div>
                {this.renderItems()}
            </div>
            <div className="cart-total">
                <div >
                <Link to="/"><button className="back-button">BACK TO HOME</button></Link></div>
                <div className="tot-price">Total Price: {this.findTotal()}</div>
            </div>
            </>
        )
    }
}
