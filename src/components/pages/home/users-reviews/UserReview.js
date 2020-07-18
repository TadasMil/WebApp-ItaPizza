import React from 'react'


export default function UserReview(props) {
    const {name, review, img} = props.userReview;
    return (

         <div className='user-review'>
             <h3>{review}</h3>
                <div className='user-review-info'>
                    <h4>{name}</h4>
                    <img src={img} alt='user'></img>
                </div>
            </div>
    )
}
