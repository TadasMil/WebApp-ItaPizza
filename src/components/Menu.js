import React, { Component } from 'react'
import MenuItem from './MenuItem'
import {MenuList} from './MenuList'

export default class Menu extends Component {
    state = {
        menu: MenuList
    }
    render() {
        
        return (
            <div>
                {this.state.menu.map(item => {
                   return <MenuItem key={item.id} itemInfo={item}/>
                })}             
            </div>
        )
    }
}


