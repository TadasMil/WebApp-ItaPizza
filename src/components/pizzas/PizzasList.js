import React, { Component } from 'react'
import {PizzasData} from '../PizzaData'
import SelectedFood from './SelectedFood'
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
                <SelectedFood pizzaData={this.state.pizzaData} selectedProduct={this.props.selectedProduct}/>
            )
        }
    }
}
