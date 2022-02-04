import React from 'react';
import './chatName.css'

export default function ChatName({user}) {
  const getFirstLatter = user.name.substring(0, 1) + user.last_name.substring(0, 1);
  console.log(getFirstLatter);
    return(
        <div className='coverChatName'>
          <p className='avatar'>{getFirstLatter}</p>
          <p className='nickName'>{user.name} {user.last_name}</p>
        </div>
    )
}