import React from 'react'
import {Link} from 'react-router-dom'
import {FaChevronDown} from 'react-icons/fa'

export default function HomeMain() {
    return (
        <div>
            <div className='home-page'>
                <div className='home-text'>
                    <p>Tobula pica</p>
                    <p>Panerk į tikros Itališkos picos skonį!</p>
                        <Link to='/'>Sužinoti daugiau</Link>
                </div>

               
                <Link to='/' className='arrow'><FaChevronDown/></Link>
            </div>
        </div>
    )
}
