import React from 'react'

export default function ProductLinks(props) {

    const {type, img} = props.itemInfo;
    const handleOnProductChange = props.handleOnProductChange;
    return (
        <div className="product">
            <img  src={img} onClick={() => handleOnProductChange(type)} alt='food'></img>
            { type==='pizza' ? <h5>{'Picos'}</h5> : null}
            { type==='burger' ? <h5>{'Mėsainiai'}</h5> : null}
            { type==='kebab' ? <h5>{'Kebabai'}</h5> : null}
            { type==='suktinis' ? <h5>{'Suktiniai'}</h5> : null}
        </div>
    )
}
