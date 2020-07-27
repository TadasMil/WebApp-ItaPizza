import React from 'react'
import Button from '../../Button'
import Fade from 'react-reveal/Fade';

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
                            <Button className='button' buttonText='mūsų produktai' link='/products'></Button>     
                        </div>                   
                    </div>
                </div>
                
            </div>
        </div>
    )
}
