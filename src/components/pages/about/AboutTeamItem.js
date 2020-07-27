import React from 'react'
import FooterSocial from '../../footer/FooterSocial';

export const AboutTeamItem = (props) => {
    const {name, duties, img} = props.itemInfo;
    return (
        <div className='about-team-member'>
            <img src={img} alt='team-member'></img>
                <div className='team-item-description'>
                    <h3>{name}</h3>
                    <p>{duties}</p>
                    <FooterSocial styling='social-links'/>
                </div>
        </div>
    )
}
