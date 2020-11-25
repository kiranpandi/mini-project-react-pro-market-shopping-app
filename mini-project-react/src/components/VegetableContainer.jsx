import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import CartPage from './CartPage';
import ShowVegetable from './ShowVegetable';

export default class VegetableContainer extends Component {

    constructor(){
        super()
        this.state = {
            products:[],
            imageDetails:[],
            cartItems:[],
        }
    }

    componentDidMount(){
        axios.get('https://api.mocki.io/v1/7bd0682b').then(res => {
            // console.log('api data',res.data.products);
            this.setState({products: res.data.products});
        })
    }


    renderVegetable = () => {
        const products = this.state.products;
        const mapRows = products.map( product => (
            <div key={product.id} className="show-veggie">
            <div><Link to="/showVegetable"> <img src={product.image} alt="product-image" className="image" onClick={()=>this.setState({imageDetails: product})}/></Link> </div>
            <div className="veggie-content">
                <div>{product.name}</div>
                <div><span>&#8377;</span> {product.price}</div>
                <div><button className="add-button" onClick={()=> this.setState({cartItems:[...this.state.cartItems,product]})}>ADD TO CART</button></div>
            </div>
            </div>
        ));
        return mapRows;
    }



    render() {
        console.log('cart',this.state.cartItems);
        return (
            <div>
                <Router>
                <div className="heading-container">
                    <h1 className="heading">ProMarket</h1>
                    <Link to="/cart"><button className="cart-button" 
                    ><img src="https://img.icons8.com/nolan/45/favorite-cart.png" alt="cart-img" /></button></Link>
                </div>
               
            <div>
            
                <div className="vegetable-container">
                    <Switch>
                <Route exact path="/">
                {this.renderVegetable()}
                </Route>
               
                <Route path="/showVegetable">
                <ShowVegetable imageDetails={this.state.imageDetails}/>
                </Route>

                <Route path="/cart">
                    <CartPage cartItems = {this.state.cartItems}/>
                </Route>
                
                </Switch>
                </div>
            </div>
            </Router>
            </div>
           
        )
    }
}
