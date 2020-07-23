import React from 'react'
import Menu from '../../Menu'
import '../../../App.css'
import Title from '../../Title'
import Zoom from 'react-reveal'

export default function HomeMenu() {
    return (
       
        <div>
             <Title title='mūsų meniu'/>
             <Zoom left>
                <Menu></Menu>
                </Zoom>
        </div>
    )
}
