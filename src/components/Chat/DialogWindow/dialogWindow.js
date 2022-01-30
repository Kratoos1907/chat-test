import React from 'react';
import ChatBox from './ChatBox/chatBox';
import ChatName from './ChatName/chatName';
import './dialogWindow.css';
import SendMassage from './SendMassage/sendMassage';

export default function DialogWindow() {
    return(
        <div className='coverDialogWindow'>
          <ChatName/>
          <ChatBox/>
          <SendMassage/>
        </div>
    )
}