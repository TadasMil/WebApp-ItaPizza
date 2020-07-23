import React, { Component } from 'react'
import NavBarLogo from './NavBarLogo'
import {TiThMenu} from 'react-icons/ti'
import ToggleMenu from './ToggleMenu'
import {MdClose} from 'react-icons/md'

export default class NavBarMobile extends Component {
    state = {
        toggleOn: false
    }
    handleOnToggleClick = () => {
        this.setState({
            toggleOn: !this.state.toggleOn
        })
    }
    render() {
        return (
            <div>
                <div className='nav-mobile'>
                    <NavBarLogo styling='nav-mobile-logo'/>
                    <div className='nav-mobile-toggle'>
                        {this.state.toggleOn ? <MdClose onClick={this.handleOnToggleClick}/> : <TiThMenu onClick={this.handleOnToggleClick}/> }
                    </div>
            </div>

            {this.state.toggleOn ? <ToggleMenu/> : null}
            </div>
        )
    }
}
