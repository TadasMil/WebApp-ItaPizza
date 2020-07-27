import React from 'react'
import TitleOfPages from '../../TitleOfPages'

export default function ProductsTitle({name}) {
    return (
        <>
            <div className='other-page-title'>
                <TitleOfPages name={name}/>
            </div>
        </>
    )
}
