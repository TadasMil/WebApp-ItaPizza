import React, { Component } from 'react'
import {FaCaretSquareDown} from 'react-icons/fa'
import Button from '../Button'
import Zoom from 'react-reveal/Zoom';
import {PopularOrNew} from '../PopularOrNew'

export default class Pizza extends Component {
    state = {
        showInfo: false
    }

    handleShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    
    checkForType = (type, size) => {
        if(type==='pizza'){
            return <p>{size}cm</p>
        } else {
            return <p>{size}g</p>
        }
    }

    checkForPopular = (popular, newProduct) => {
        if(popular){
            return (
                <PopularOrNew name='perkamiausia' popularOrNew='individual-pizza-popular'/>
            )
        } else if(newProduct){
            return (
                <PopularOrNew name='naujiena' popularOrNew='individual-pizza-popular'/>
            )
        }
    }

   

    render() {
        const checkInfo = (info) => {
            if(info === true){
                return (
                    <div className='individual-description'>
                        <p>{description}</p>
                        <div className='individual-price'>
                           <span className='individual-price-ele'>
                                {this.checkForType(type, size)}
                                <p>{price}€</p>
                           </span>
                        </div>
                        <Button className='button-products' buttonText='Užsisakyti' link='/'></Button>
                     </div>
                )
            } else {
                return null;
            }
        }
        
        const {img, size, name, newProduct, type, description, popular, price} = this.props.pizzaInfo;
        return (
          <Zoom>
            <div className='individual-pizza'>
               {this.checkForPopular(popular, newProduct)}
            <img src={img} alt='pizza'></img>
            <h3>{name}</h3>
                <div className='individual-more'>
                    <span className='individual-more-button' onClick={this.handleShowInfo}><FaCaretSquareDown/></span>
                    <h4>Aprašymas</h4>
                </div>
            {checkInfo(this.state.showInfo)}
         </div>
         </Zoom>
        )
    }
}
