import React from 'react'
import Button from '../../Button'

export const AboutPresentationButtons = ({handleSectionState}) => {
    return (
        <div className='about-presentation-buttons-list'>
           
            <div className='about-presentation-buttons'>
                <p onClick={() => handleSectionState('about')}>Apie mus</p>
                <p onClick={() => handleSectionState('missions')}>Užduotys</p>
                <p onClick={() => handleSectionState('goals')}>Tikslai</p>
                <p onClick={() => handleSectionState('values')}>Vertybės</p>
            </div>
           
               <div className='about-presentation-button-position'>
                    <Button className='button-black' buttonText='Kontaktai' link='/contacts'></Button>
               </div>
            
            
        </div>
    )
}

export default AboutPresentationButtons;
