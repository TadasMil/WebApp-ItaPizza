import React from 'react'
import PizzasList from '../../pizzas/PizzasList'
import Title from '../../Title'

export default function HomeMostPurchased() {

    return (
        <div className='most-purchased'>
           <Title title='Populiariausios'/>
            <PizzasList mostPurchased={true}/>
        </div>
    )
}
