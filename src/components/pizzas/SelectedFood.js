import React from 'react'
import Pizza from './Pizza'

export default function SelectedPizza({pizzaData, selectedProduct}) {
    return (
        <>
            <div className='pizzas'>
                    {
                        pizzaData.filter(item=> {
                            return item.type === selectedProduct
                        }).map(product => {
                            return <Pizza key={product.id} pizzaInfo={product}></Pizza>
                        })
                    }
                </div>
        </>
    )
}
