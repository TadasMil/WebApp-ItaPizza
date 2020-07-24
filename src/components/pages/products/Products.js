import React, { Component } from 'react'
import NavBar from '../../navbar/NavBar'
import ProductsTitle from './ProductsTitle'
import ProductsList from './ProductsList'

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
        })
    
    }

    render() {
        return (
            <>
                <ProductsTitle handleOnProductChange={this.handleOnProductChange}/>
                    <ProductsList selectedProduct={this.state.product}/>
            </>
        )
    }
}
