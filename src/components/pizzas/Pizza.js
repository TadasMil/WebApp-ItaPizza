import React, { Component } from 'react'
import {FaCaretSquareDown} from 'react-icons/fa'

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
                            <p>45cm</p>
                            <p>{price}</p>
                        </div>
                     </div>
                )
            } else {
                return null;
            }
        }
        
        const {img, name, description, price} = this.props.pizzaInfo;
        return (
            <div className='individual-pizza'>
            <img src={img}></img>
            <h3>{name}</h3>
                <div className='individual-more'>
                    <span className='individual-more-button' onClick={this.handleShowInfo}><FaCaretSquareDown/></span>
                    <h4>Aprašymas</h4>
                </div>
            {checkInfo(this.state.showInfo)}
        </div>
        )
    }
}
