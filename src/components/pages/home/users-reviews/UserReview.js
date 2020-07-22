import React from 'react'


export default function UserReview(props) {
    const {name, review, img} = props.userReview;
    return (

        <div className='user-review'>
            <div className='user-review-text'>
             <h3>{review}</h3>
            </div>
             <img src={img} alt='user'></img>
                <div className='user-review-info'>
                    <h4>{name}</h4>
                </div>
        </div>
    )
}
