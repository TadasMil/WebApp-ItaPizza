import React, { Component } from 'react'
import {PizzasData} from '../PizzaData'
import Pizza from './Pizza'

export default class PizzasList extends Component {
    state = {
        pizzaData: PizzasData
    }
    
    render() {
        if(this.props.mostPurchased === true){
            return (
                <div className='pizzas'>
                    {
                        this.state.pizzaData.filter(pizza => {
                            return pizza.popular === true
                        }).map(filteredPizza => {
                            return <Pizza key={filteredPizza.id} pizzaInfo={filteredPizza} />
                        })
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Tadas</h1>
                </div>
            )
        }
    }
}
