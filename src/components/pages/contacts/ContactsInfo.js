import React from 'react'
import FooterSocial from '../../footer/FooterSocial'
import {ContactsInfoPhone} from './ContactsInfoPhone'
import {ContactsInfoEmail} from './ContactsInfoEmail'
import {ContactsInfoAddress} from './ContactsInfoAddress'

export const ContactsInfo = () => {
    return (
       <>
            <div className='contacts-info'>
                <div className='contacts-info-data'>
                    <p>Socialiniai tinklai</p>
                    <FooterSocial styling='contacts-social'/>
                </div>
                <ContactsInfoPhone/>
                <ContactsInfoEmail/>
                <ContactsInfoAddress/>
            </div>
       </>
    )
}
