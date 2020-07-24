import React from 'react'

export default function ProductLinks(itemName, handleOnProductChange) {
    return (
        <div className="">
            <h5 onClick={() => handleOnProductChange(itemName)}>{itemName}</h5>
        </div>
    )
}
