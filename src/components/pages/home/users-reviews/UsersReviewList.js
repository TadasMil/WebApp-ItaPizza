import React, { Component } from 'react'
import UserReview from './UserReview'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import SectionName from '../../../SectionName'

export default class UsersReviewList extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "-Monika Dobraitytė",
                review: "Skanūs patiekalai, malonus aptarnavimas. Maisto kokybė labai gera. Esu didelė picų megėja, visada prekinsiuos tik pas jus",
                img: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
            },
            {
                id: 2,
                name: "-Donatas Kačinskas",
                review: "Patiko maisto kokybė, tikri Itališki patiakalai. Pasijaučiau kaip Italijoje, teko lankytis, maisto skonis panašus.",
                img: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
            },
            {
                id: 3,
                name: "-Dominyka Linksmoji",
                review: "Įvairus patiekalų pasirinkimas, labai patiko. Tikrai apsilankysiu dar ne vieną sykį.",
                img: "https://randomuser.me/api/portraits/med/women/15.jpg",
            }
            ,
            {
                id: 4,
                name: "-Jonas Storasis",
                review: "Greitas aptarnavimas. Skubėjau į darbą, maniau, kad vėluosiu, bet ne. Aptarnavo per 20 minučių. Super!",
                img: "https://randomuser.me/api/portraits/med/men/47.jpg",
            }
            ,
            {
                id: 5,
                name: "-Karolina Brimavičiūtė",
                review: "Taip skaniai nebuvau valgiusi nuo Kinijos laikų. Užskaitau.",
                img: "https://randomuser.me/api/portraits/med/women/35.jpg",
            }
        ],
        
    }

  

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 2,
            slidesToScroll: 1,
            className:'slider',
            arrows: false,
            pauseOnHover: false,
            responsive: [
                {
                  breakpoint: 730,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                }
            ]
          };
        return (
            <>
            <div className='user-review-list'>
               <SectionName title='Atsiliepimai'/>
                <div className='slider-div'>
                <Slider {...settings}>
                    {
                    this.state.users.map(user => {
                        return (
                        <UserReview key={user.id} userReview={user}/>
                        )
                    })
                    }
                </Slider>
                </div>
            </div>
            </>
        )
    }
}
