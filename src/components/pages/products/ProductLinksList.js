import React, { Component } from 'react'

export default class ProductLinks extends Component {
    state = {
        menu: ['pizzas', 'burgers', 'kebabs', 'suktiniai']
    }
    render() {
        return (
            <div className='product-page-links'>
                    {this.state.menu.map(item=> {
                        return <ProductLinks key={item.index} itemName={this.props.item} handleOnProductChange={this.props.handleOnProductChange}></ProductLinks>
                    })}
            </div>
        )
    }
}

