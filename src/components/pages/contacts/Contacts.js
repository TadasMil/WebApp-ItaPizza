import React, { Component } from 'react'
import ProductsTitle from '../products/ProductsTitle'
import {ContactsForm} from './ContactsForm'
import {ContactsInfo} from './ContactsInfo'
import Footer from '../../footer/Footer'

export default class Contacts extends Component {
    render() {
        return (
            <>
                  <ProductsTitle name={'Kontaktai'}/>
                        <div className='contacts'>
                            <ContactsForm/>
                            <ContactsInfo/>
                        </div>
                    <Footer/>
            </>
        )
    }
}

