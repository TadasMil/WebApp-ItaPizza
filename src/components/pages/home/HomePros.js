import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../../Button'
import Fade from 'react-reveal/Fade';

export default function HomePros(props) {
    return (
        <div>
            <div className={props.imageStyling}>
                <Fade right>
                <div className={props.textStyling}>
                    <div className={props.textBoxStyling}>
                    <h3>{props.text1}</h3>
                    <h5>{props.text2}</h5>
                    <p>{props.text3}</p>   
                        <div>
                            <Button className='button' buttonText='mūsų produktai' link='/'></Button>     
                        </div>                   
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}
