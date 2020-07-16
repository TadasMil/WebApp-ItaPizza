import React from 'react'
import PizzasList from '../../pizzas/PizzasList'

export default function HomeMostPurchased() {

    return (
        <div className='most-purchased'>
            <div className='title'>
                <span className='title-span'><h2>Populiariausios</h2></span>
            </div>
            <PizzasList mostPurchased={true}/>
        </div>
    )
}
