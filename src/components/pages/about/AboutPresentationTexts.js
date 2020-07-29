import React from 'react'

const AboutPresentationTexts = ({currentSection, textData}) => {

   return (
    textData.filter(item=>{
        return currentSection === item.name
    }).map((items) => {
        return (
            <div key={items.id} className='about-presentation-texts'>
                {items.text}
                <img src={items.img} alt={items.name}></img>
            </div>
        )
    })
   )
}

export default AboutPresentationTexts;
