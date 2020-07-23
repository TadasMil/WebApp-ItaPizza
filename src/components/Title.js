import React from 'react'
import Bounce from 'react-reveal/Bounce';

export default function Title({title}) {
    return (
        
        <div className='title'>
            <Bounce top>
            <span className='title-span'><h2>{title}</h2></span>
            </Bounce>
        </div>
    )
}
