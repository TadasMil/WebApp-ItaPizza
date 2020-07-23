import React from 'react'
import {Link} from 'react-router-dom'
import {FaChevronDown} from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

export default function HomeMain() {
    return (
        <div>
            <div className='home-page'>
                <Fade right>
                    <div className='home-text'>
                        <p>Tobula pica</p>
                        <p>Panerk į tikros Itališkos picos skonį!</p>
                        <Link to='/'>Sužinoti daugiau</Link>
                    </div>
                </Fade>

               
                <Link to='/' className='arrow'><FaChevronDown/></Link>
            </div>
        </div>
    )
}
