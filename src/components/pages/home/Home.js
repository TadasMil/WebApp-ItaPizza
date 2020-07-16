import React from 'react'
import HomeMain from './HomeMain'
import HomeMenu from './HomeMenu'
import HomeFirstPros from './HomeFirstPros'
import HomeMostPurchased from './HomeMostPurchased'

export default function Home() {
    return (
        <React.Fragment>
            <HomeMain/>
            <HomeMenu/>   
            <HomeFirstPros/>
            <HomeMostPurchased></HomeMostPurchased>
        </React.Fragment>
    )
}
