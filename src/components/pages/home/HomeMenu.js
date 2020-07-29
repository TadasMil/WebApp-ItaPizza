import React from 'react'
import Menu from '../../Menu'
import '../../../App.css'
import SectionName from '../../SectionName'
import Zoom from 'react-reveal'

export default function HomeMenu() {
    return (
       
        <div id="menu">
             <SectionName title='mūsų meniu'/>
                <Zoom left>
                    <Menu></Menu>
                </Zoom>
        </div>
    )
}
