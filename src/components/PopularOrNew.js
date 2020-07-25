import React from 'react'

export const PopularOrNew = ({name, popularOrNew}) => {
    return (
        <>
            <div className={popularOrNew}>
                {name==='naujiena'? <p style={{backgroundColor: 'red'}}>{name}</p> :<p>{name}</p>}
            </div>
        </>
    )
}
