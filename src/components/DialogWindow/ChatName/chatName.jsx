import React, { useState } from 'react';
import './chatName.css'
import AddPopUp from './PopUp/popUp'


export default function ChatName({user,setActiveDialog, setData}) {
  const [popUp, setPopUp] = useState(false);
  const getFirstLatter = user.name.substring(0, 1) + user.last_name.substring(0, 1);
    return(
        <>
          <div className="wrapChatName">
            <div className='coverChatName'>
                <p className='avatar'>{getFirstLatter}</p>
                <p className='nickName'>{user.name} {user.last_name}</p>
            </div>
            <p className='viewInfo' onClick={()=>setPopUp(!popUp)}>i</p>
          </div>
          {popUp && <AddPopUp setActiveDialog={setActiveDialog} setPopUp={setPopUp} avatar={getFirstLatter} setData={setData} user={user}/> }
        </>
    )
}