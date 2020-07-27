import React, { Component } from 'react'
import Logo from '../navbar/NavBarLogo'
import SocialMedia from './FooterSocial'


export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer'>
                   <Logo styling='footer-logo'/>
                   <SocialMedia styling='social'/>
                </div>
            </>
        )
    }
}
