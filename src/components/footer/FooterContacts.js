import React from 'react'
import FooterPhoneEmail from './FooterPhoneEmail'
import FooterSocial from './FooterSocial'
import Logo from '../navbar/NavBarLogo'

export default function FooterContacts() {
    return (
      <>
        <div className='footer-contacts'>
            <div className='footer-contacts-list'>
                <Logo styling={'footer-logo'}/>
                <FooterPhoneEmail/>
                <FooterSocial/>
            </div>
        </div>
          <p>tadas</p>
      </>
    )
}
