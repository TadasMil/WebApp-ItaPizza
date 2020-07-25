import React, { Component } from 'react'
import NavBar from '../../navbar/NavBar'
import ProductsTitle from './ProductsTitle'
import ProductsList from './ProductsList'
import ProductLinksList from './ProductLinksList'
import Footer from '../../footer/Footer'

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: 'pizza'
        }
    }
  
    handleOnProductChange = (product) => {
        const newProduct = product;

        this.setState({
            product: newProduct
        },() => {console.log(this.state.product)})
    
    }

    render() {
        return (
            <>
                <ProductsTitle/>
                    <ProductLinksList handleOnProductChange={this.handleOnProductChange}/>
                    <ProductsList selectedProduct={this.state.product}/>

                <Footer />
            </>
        )
    }
}
