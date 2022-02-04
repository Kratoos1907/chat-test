import moment from 'moment';
import React, { useEffect } from 'react';
import './user.css'
export default function User({user_data, setActiveDialog, activeDialog}) {

  const active_user = () => {
    if(activeDialog && activeDialog.id === user_data.id) return { background: '#c5c5c5'}
    else return {}
  }

  const unActiveChat = () => {
    if(activeDialog && activeDialog.id === user_data.id) setActiveDialog(null);
    // else if(activeDialog && activeDialog.id !== user_data.id) setActiveDialog(null);
    else setActiveDialog(user_data);
  }
  const lastMessage = {}
  const date =  moment.unix(user_data.last_massage.time_date).format('HH:mm MM/DD/YY') 
  const getFirstLatter = user_data.name.substring(0, 1) + user_data.last_name.substring(0, 1);
  console.log(getFirstLatter);

    return(
        <div 
          className='coverUserCard' 
          onClick={()=> unActiveChat() }
          style={active_user()}
        >
            <p className='avatar'>{getFirstLatter}</p>

            <div className='chatShort'>
              <p>{user_data.name} {user_data.last_name}</p>
              <p className='coverDate'>{date}</p>
              <p className='massageShort'>{user_data.last_massage.massage}</p>
            </div>
        </div>
    )
}