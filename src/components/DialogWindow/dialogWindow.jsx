import React, { useState } from 'react';
// import { useState } from 'react/cjs/react.development';
import ChatBox from './ChatBox/chatBox';
import ChatName from './ChatName/chatName';
import './dialogWindow.css';
import SendMassage from './SendMassage/sendMassage';

export default function DialogWindow({setActiveDialog,data, setData, activeDialog}) {
// const [allMessages, setAllMessages] = useState(activeDialog);
  
  // console.log(activeDialog);
  return(
      <div className='coverDialogWindow'>
        <ChatName user={activeDialog} />
        <ChatBox massages={activeDialog}/>
        <SendMassage setData={setData} data={data} activeDialog={activeDialog} setActiveDialog={setActiveDialog}/>
      </div>
    )
}