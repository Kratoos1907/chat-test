import moment from 'moment';
import React from 'react';
import './user.css'
export default function User({user_data,setData, setActiveDialog,data, activeDialog}) {

  const active_user = () => {
    if(activeDialog && activeDialog.id === user_data.id) return { background: '#c5c5c5'}
    else return {}
  }
  const unActiveChat = () => {
    if(activeDialog && activeDialog.id === user_data.id) setActiveDialog(null);
    else {
      setData((prev)=> {
        const dataUser = {...prev}
        dataUser.massages.filter((msg) => msg.user_id === user_data.id).map(msg => msg.read = true)
        return dataUser
      } )
      setActiveDialog(user_data);
    }
  }
  const date =  moment.unix(user_data.last_massage.time_date).format('HH:mm MM/DD/YY') 
  const getFirstLatter = user_data.name.substring(0, 1) + user_data.last_name.substring(0, 1);
  const findUnreadMassage = () => {
    return data.massages.filter((msg) => msg.user_id === user_data.id).filter(usrMsg => !usrMsg.read).length;
  }

   const checkUnreadMassages = () => {
     if(findUnreadMassage() !== undefined && findUnreadMassage()) return findUnreadMassage();
     else return getFirstLatter;
    }
    const getStyleNotifications = () => {
     if(findUnreadMassage() !== undefined && findUnreadMassage()) return {background: '#6b591c'};
     else return {}

   }
    return(
        <div 
          className='coverUserCard' 
          onClick={()=> unActiveChat() }
          style={active_user()}
          id={activeDialog && activeDialog.id === user_data.id ? `${user_data.id}-user` : ""}
        >
            <p className='avatar' style={getStyleNotifications()}>{checkUnreadMassages()}</p>

            <div className='chatShort'>
              <p>{user_data.name} {user_data.last_name}</p>
              <p className='coverDate'>{date}</p>
              <p className='massageShort'>{user_data.last_massage.massage}</p>
            </div>
        </div>
    )
}