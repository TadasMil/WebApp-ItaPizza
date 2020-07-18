import React, { Component } from 'react'
import UserReview from './UserReview'
import Slider from "react-slick";

export default class UsersReviewList extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Monika",
                review: "Skanūs patiekalai, malonus aptarnavimas",
                img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
            },
            {
                id: 2,
                name: "Donatas",
                review: "Patiko maisto kokybė, tikri Itališki patiakalai",
                img: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
            },
            {
                id: 3,
                name: "Kęstas",
                review: "Įvairus patiekalų pasirinkimas, labai patiko",
                img: "https://randomuser.me/api/portraits/med/men/45.jpg",
            }
        ],
        
    }

    render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0,
    } 
        return (
            <>
               <Slider {...settings}>
                        {
                            this.state.users.map(item=>{
                                return (
                                    <UserReview key={item.id} userReview={item}/>
                                )
                            })
                        }    
                </Slider>
            </>
        )
    }
}
