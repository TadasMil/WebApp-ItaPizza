import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePros(props) {
    return (
        <div>
            <div className={props.imageStyling}>
                <div className={props.textStyling}>
                    <div className={props.textBoxStyling}>
                    <h3>{props.text1}</h3>
                    <h5>{props.text2}</h5>
                    <p>{props.text3}</p>
                    <div>
                        <button className={props.buttonStyling}>
                            <Link to='/'>{props.buttonText}</Link>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
