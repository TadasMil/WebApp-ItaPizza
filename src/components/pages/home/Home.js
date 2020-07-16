import React from 'react'
import HomeMain from './HomeMain'
import HomeMenu from './HomeMenu'
import HomeFirstPros from './HomeFirstPros'
import HomeMostPurchased from './HomeMostPurchased'
import HomeSecondPros from './HomeSecondPros'

export default function Home() {
    return (
        <React.Fragment>
            <HomeMain/>
            <HomeMenu/>   
            <HomeFirstPros/>
            <HomeMostPurchased></HomeMostPurchased>
            <HomeSecondPros/>
            <h1>Tadas</h1>
        </React.Fragment>
    )
}
