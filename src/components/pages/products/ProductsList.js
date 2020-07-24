import React from 'react'
import PizzasList from '../../pizzas/PizzasList'

export default function ProductsList({selectedProduct}) {
    return (
        <>
            <div className='products-list'>
                <PizzasList mostPurchased={false} selectedProduct={selectedProduct}/>
            </div>
        </>
    )
}
