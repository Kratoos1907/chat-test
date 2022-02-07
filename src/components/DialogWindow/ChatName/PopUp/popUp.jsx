import './popUp.css'
import React, { useState } from 'react'

export default function AddPopUp({setPopUp, setActiveDialog ,avatar, user, setData}) {
  const removeUser = () => {
    setData((prev)=> {
      setPopUp(false);
      const newArr = {...prev};

      const getUser = newArr.users.find((usr)=> usr.id === user.id);
      newArr.users.splice(newArr.users.indexOf(getUser), 1);
      
      newArr.massages.filter((msg) => {
        if(msg.user_id === user.id) {
          newArr.massages.splice(newArr.massages.indexOf(msg), 1);
        }
      });
      setActiveDialog(false);
      return newArr;
    })
  };

  return (
    <>
    <div className="closeBg" onClick={()=> setPopUp(false)} />
      <div className="coverUserInfoPopUp" >
        <div className="coverInfoAboutUser">
          <div className="avatar" style={{gridRowStart: '1', gridRowEnd: '3'}} >{avatar}</div>
          <p>Name: {user.name}</p>
          <p>Last name: {user.last_name}</p>
        </div>
        <button className='removeUser'  onClick={()=>removeUser()}>Remove chat with user <span>{user.name} {user.last_name}</span></button>
      </div>
    </>
  )
}
