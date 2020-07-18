import React from 'react'
import HomeMain from './HomeMain'
import HomeMenu from './HomeMenu'
import HomeFirstPros from './HomeFirstPros'
import HomeMostPurchased from './HomeMostPurchased'
import HomeSecondPros from './HomeSecondPros'
import UsersReviewList from './users-reviews/UsersReviewList'
import Footer from '../../footer/Footer'

export default function Home() {
    return (
        <React.Fragment>
            <HomeMain/>
            <HomeMenu/>   
            <HomeFirstPros/>
            <HomeMostPurchased></HomeMostPurchased>
            <HomeSecondPros/>
            <UsersReviewList/>
            <Footer/>
        </React.Fragment>
    )
}
