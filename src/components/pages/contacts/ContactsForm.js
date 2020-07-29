import React from 'react'
import Button from '../../Button'

export const ContactsForm = () => {
    return (
      <>
        <div className='contacts-form'>
            <h3>Parašykite mums</h3>
          <div className='contacts-form-fields'>
                <form>
                    <input type="text" id="fname" placeholder='Vardas'></input>
                    <input type="text" id="fname" placeholder='Pavardė'></input>
                    <input type="text" id="fname" placeholder='Elektroninis paštas'></input>
                    <input type="text" id="fname" placeholder='Telefono numeris'></input>
                    <textarea placeholder='Palikite žinutę..'></textarea>
                </form>
            </div>
            <div className='contacts-button-style'>
            <Button className='button-black' buttonText='Patvirtinti' link='/'></Button>
            </div>
        </div>
      </>
    )
}
