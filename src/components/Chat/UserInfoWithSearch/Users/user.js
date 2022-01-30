import React from 'react';
import './user.css'
export default function User({user_data}) {
    return(
        <div className='coverUserCard'>
            <p className='avatar'>{user_data.user_photo}</p>
            <div className='chatShort'>
              <p>{user_data.name} {user_data.last_name}</p>
              <p>{user_data.time}</p>
              <p>{user_data.last_message}</p>
            </div>
        </div>
    )
}