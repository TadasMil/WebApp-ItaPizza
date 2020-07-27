import React from 'react'
import AboutWhyUsCircle from './AboutWhyUsCircle'

const AboutWhyUsItem = (props) => {
    const {title, text, icon} = props.itemInfo;
    return (
        <>
        <div className='about-why-us-item'>
            <AboutWhyUsCircle icon={icon}/>
            <div className='about-why-us-text'>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

export default AboutWhyUsItem;
