import React from 'react'
import HomeMain from './HomeMain'
import HomeMenu from './HomeMenu'
import HomeFirstPros from './HomeFirstPros'

export default function Home() {
    return (
        <React.Fragment>
            <HomeMain/>
            <HomeMenu/>   
            <HomeFirstPros/>

            <h2>Tadas</h2>
        </React.Fragment>
    )
}
