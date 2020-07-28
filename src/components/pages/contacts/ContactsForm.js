import React from 'react'
import Button from '../../Button'
import SectionName from '../../SectionName'

export const ContactsForm = () => {
    return (
      <>
        <div className='contacts-form'>
          <div className='contacts-form-fields'>
                <form>
                    <input type="text" id="fname" placeholder='Vardas'></input>
                    <input type="text" id="fname" placeholder='Pavardė'></input>
                    <input type="text" id="fname" placeholder='Elektroninis paštas'></input>
                    <input type="text" id="fname" placeholder='Telefono numeris'></input>
                    <textarea>Palikitę žinutę..</textarea>
                </form>
            </div>
                <Button className='button-black' buttonText='Patvirtinti' link='/'></Button>
        </div>
      </>
    )
}
