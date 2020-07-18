import React, { Component } from 'react'
import FooterDescription from './FooterDescription'
import FooterContacts from './FooterContacts'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer'>
                    <FooterDescription/>
                    <FooterContacts />
                </div>
            </>
        )
    }
}
