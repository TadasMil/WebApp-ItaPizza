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
    
    const checkIfActive = (activeSection, currentItem, currentItemName, key) => {
        if(activeSection === currentItem){
            return <p key={key} className='about-presentation-buttons-active' onClick={() => handleSectionState(currentItem)}>{currentItemName}</p>
        } else {
            return <p key={key} onClick={() => handleSectionState(currentItem)}>{currentItemName}</p>
        }
    }
    
    return (
        <div className='about-presentation-buttons-list'>
           
            <div className='about-presentation-buttons'>
                {
                    sections.map(item=>{
                        return  checkIfActive(activeSection, item.identifier, item.name, item.id)
                    })
                }
            </div>
        </div>
    )
}

export default AboutPresentationButtons;
