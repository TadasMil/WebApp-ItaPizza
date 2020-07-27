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
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
                icon: <IoMdSpeedometer/>
            },
            {
                id: 2,
                title: 'didelis maisto pasirinkimas',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
                icon: <IoMdPizza/>
            },
            {
                id: 3,
                title: 'Švieži ingredientai',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
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
