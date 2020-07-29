import React from 'react'
import {Link} from 'react-router-dom'
import {FaChevronDown} from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import { HashLink as Linki } from 'react-router-hash-link';

export default function HomeMain() {
    return (
        <div>
            <div className='home-page'>
                <Fade right>
                    <div className='home-text'>
                        <p>Tobula pica</p>
                        <p>Panerk į tikros Itališkos picos skonį!</p>
                        <Link to='/about'>Sužinoti daugiau</Link>
                    </div>
                </Fade>

               
                <Linki smooth to='#menu' className='arrow'><FaChevronDown/></Linki>
            </div>
        </div>
    )
}
