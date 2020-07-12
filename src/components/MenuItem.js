import React from 'react'

export default function MenuItem({itemInfo}) {
    return (
        <div>
            {itemInfo.name}
            <br/>
            <img src={itemInfo.img} alt='cant-load' />
            <br/>
            {itemInfo.icon}
        </div>
    )
}
