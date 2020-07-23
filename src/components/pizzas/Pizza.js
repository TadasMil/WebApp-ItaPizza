import React, { Component } from 'react'
import {FaCaretSquareDown} from 'react-icons/fa'
import Button from '../Button'
import Zoom from 'react-reveal/Zoom';

export default class Pizza extends Component {
    state = {
        showInfo: false
    }

    handleShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const checkInfo = (info) => {
            if(info === true){
                return (
                    <div className='individual-description'>
                        <p>{description}</p>
                        <div className='individual-price'>
                           <span className='individual-price-ele'>
                                <p>45cm</p>
                                <p>{price}</p>
                           </span>
                        </div>
                        <Button className='button-products' buttonText='Užsisakyti' link='/'></Button>
                     </div>
                )
            } else {
                return null;
            }
        }
        
        const {img, name, description, popular, price} = this.props.pizzaInfo;
        return (
            <Zoom left>
            <div className='individual-pizza'>
                {popular ? 
                <div className='individual-pizza-popular'>
                    <p>Perkamiausia</p>
                </div>
                : null}
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
