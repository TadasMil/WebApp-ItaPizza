import React, { Component } from 'react'

export default class Pizza extends Component {
    state = {
        showInfo: false
    }
    render() {
        const {img, name, description, price} = this.props.pizzaInfo;
        return (
            <div className='individual-pizza'>
            <img src={img}></img>
            <h3>{name}</h3>
                <div>
                    <p>{description}</p>
                    <div className='individual-price'>
                        <p>45cm</p>
                        <p>{price}</p>
                    </div>
                </div>
        </div>
        )
    }
}
