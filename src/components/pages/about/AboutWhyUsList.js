import React, { Component } from 'react'
import {IoMdSpeedometer} from 'react-icons/io'
import {IoMdPizza} from 'react-icons/io'
import {FaLeaf} from 'react-icons/fa'
import AboutWhyUsItem from './AboutWhyUsItem'

export default class AboutWhyUs extends Component {
    state = {
        prosAboutUs: [
            {
                id: 1,
                title: 'greitas aptarnavimas',
                text: 'Aptarnavimo trukmė iki valandos piko metu, ne piko metu užsakymai atliekami per pusvalandį!',
                icon: <IoMdSpeedometer/>
            },
            {
                id: 2,
                title: 'didelis maisto pasirinkimas',
                text: 'Galimybė paragauti virš 30 patiekalų! Picos, Suktiniai, Kebabai bei mėsainiai.',
                icon: <IoMdPizza/>
            },
            {
                id: 3,
                title: 'Švieži ingredientai',
                text: 'Skaniausi patiekalai tuomet, kai ingredientai švieži. O pas mus jų netrūksta!',
                icon: <FaLeaf/>
            },
        ]
    }
    render() {
        return (
            <>
                <div className='about-why-us'>
                    <div className='about-why-us-list'>
                            {this.state.prosAboutUs.map(item=> {
                                    return <AboutWhyUsItem key={item.id} itemInfo={item}/>
                            })}
                    </div>
                </div> 
            </>
        )
    }
}
