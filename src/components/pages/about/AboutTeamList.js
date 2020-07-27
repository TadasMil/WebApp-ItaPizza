import React, { Component } from 'react'
import {AboutTeamItem} from './AboutTeamItem'

export default class AboutTeamList extends Component {
    state = {
        team:[
            {
                id: 1,
                name: 'Tadas Milieška',
                duties: 'Direktorius',
                img: '"https://randomuser.me/api/portraits/men/1.jpg"'
            },
            {
                id: 2,
                name: 'Tadas Milieška',
                duties: 'Direktorius',
                img: '"https://randomuser.me/api/portraits/men/3.jpg"'
            },
            {
                id: 3,
                name: 'Tadas Milieška',
                duties: 'Direktorius',
                img: '"https://randomuser.me/api/portraits/men/5.jpg"'
            },
            {
                id: 4,
                name: 'Tadas Milieška',
                duties: 'Direktorius',
                img: '"https://randomuser.me/api/portraits/men/1.jpg"'
            },
        ]
    }
    render() {
        return (
            <>
               <div className='about-team-list'>
                    {this.state.team.map(item=> {
                        return <AboutTeamItem key={item.id} itemInfo={item}/>
                    })}
               </div>

            </>
        )
    }
}

