import React from 'react'
import PizzasList from '../../pizzas/PizzasList'
import SectionName from '../../SectionName'

export default function HomeMostPurchased() {

    return (
        <div className='most-purchased'>
           <SectionName title='Populiariausios'/>
            <PizzasList mostPurchased={true}/>
        </div>
    )
}
