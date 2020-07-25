import React, { Component } from 'react'
import ProductLinks from './ProductLinks'
import SectionName from '../../SectionName'

export default class ProductLinksList extends Component {
    state = {
        menu: [
            {
                id: 1,
                type: 'pizza',
                img: "https://img.icons8.com/color/48/000000/pizza-five-eighths.png"
            },
            {
                id: 2,
                type: 'burger',
                img: "https://img.icons8.com/color/48/000000/hamburger.png"
            },
            {
                id: 3,
                type: 'kebab',
                img: "https://img.icons8.com/color/48/000000/wrap.png"
            },
            {
                id: 4,
                type: 'suktinis',
                img: "https://img.icons8.com/color/48/000000/taco.png"
            }
        ]
    }
    render() {
        return (
          <>
          <SectionName title='Pasirinkite' />
            <div className='product-page-links-list'>
                
                {this.state.menu.map((item)=> {
                    return <ProductLinks key={item.id} itemInfo={item} handleOnProductChange={this.props.handleOnProductChange}></ProductLinks>
                })}
            </div>
          </>
        )
    }
}

