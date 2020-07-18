import React from 'react'
import FooterInfo from './FooterInfo'
import FooterOffer from './FooterInfo'
import FooterNewsletter from './FooterNewsletter'

export default function FooterDescription() {
    return (
        <>
            <div className='footer-description'>
                <div className='footer-description-list'>
                    <FooterInfo title='Informacija'
                    info1='Apie mus'
                    info2='DUK'
                    info3='Naujienos'
                    info4='Kontaktai'></FooterInfo>
                    <FooterOffer title='Pasiūlymai'
                    info1='Picos'
                    info2='Mėsainiai'
                    info3='Lavašai'
                    info4='Tortilijos'
                    ></FooterOffer>
                    <FooterNewsletter title='Naujienlaiškis'
                    text='Prenumeruok naujienlaiški'></FooterNewsletter>
                </div>
            </div>
        </>
    )
}
