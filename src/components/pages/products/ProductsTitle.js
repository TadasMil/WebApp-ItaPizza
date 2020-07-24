import React from 'react'
import TitleOfPages from '../../TitleOfPages'
import ProductLinksList from './ProductLinksList'

export default function ProductsTitle({handleOnProductChange}) {
    return (
        <>
            <div className='other-page-title'>
                <TitleOfPages name='Produktai'/>
                <ProductLinksList handleOnProductChange={handleOnProductChange}/>
            </div>
        </>
    )
}
