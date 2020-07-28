import React from 'react'
import Button from '../../Button'

export const AboutPresentationButtons = ({activeSection, handleSectionState}) => {
    const sections = [
        {
            id: 1,
            identifier: 'about',
            name: 'Apie mus'
        },
        {
            id: 2,
            identifier: 'missions',
            name: 'Užduotys'
        },
        {
            id: 3,
            identifier: 'goals',
            name: 'Tikslai'
        },
        {
            id: 4,
            identifier: 'values',
            name: 'Vertybės'
        },
    ]
    
    const checkIfActive = (activeSection, currentItem, currentItemName) => {
        if(activeSection === currentItem){
            return <p className='about-presentation-buttons-active' onClick={() => handleSectionState(currentItem)}>{currentItemName}</p>
        } else {
            return <p onClick={() => handleSectionState(currentItem)}>{currentItemName}</p>
        }
    }
    
    return (
        <div className='about-presentation-buttons-list'>
           
            <div className='about-presentation-buttons'>
                {
                    sections.map(item=>{
                        return  checkIfActive(activeSection, item.identifier, item.name)
                    })
                }
            </div>
        </div>
    )
}

export default AboutPresentationButtons;
