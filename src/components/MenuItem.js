import React from 'react'
import Zoom from 'react-reveal/Jump';

export default function MenuItem({itemInfo}) {
    return (
        <Zoom right>
        <article className='menu-list'>
           
            <div className='menu-list-item'>
                <img src={itemInfo.img} alt='cant-load'></img>
            </div>
            <div className='menu-list-info'>
                <div className='circle'>
                    <div className='menu-icon'>{itemInfo.icon}</div>
                </div>
            </div>
            
                <p className='menu-name'>{itemInfo.name}</p>
               
        </article>
        </Zoom>
    )
}
