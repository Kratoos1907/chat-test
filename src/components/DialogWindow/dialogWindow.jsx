import React from 'react';
import ChatBox from './ChatBox/chatBox';
import ChatName from './ChatName/chatName';
import './dialogWindow.css';
import PreviewChatNotSelected from './PreviewChatNotSelected/previewChatNotSelected';
import SendMassage from './SendMassage/sendMassage';

export default function DialogWindow({setActiveDialog,data, setData, activeDialog}) {
  const getMassagesByUserId=()=>{
    const findMessage = data.massages.filter(msg=> msg.user_id === activeDialog.id)
    if(findMessage.length){
      return <ChatBox data={data} activeDialog={activeDialog}/>
    } else{
      return <PreviewChatNotSelected text={'No massages yet'} />
    }
  }
  return(
      <div className='coverDialogWindow'>
        <ChatName setActiveDialog={setActiveDialog} user={activeDialog} setData={setData} />
        {getMassagesByUserId()}
        <ChatBox data={data} activeDialog={activeDialog}/>
        <SendMassage setData={setData} data={data} activeDialog={activeDialog} setActiveDialog={setActiveDialog}/>
      </div>
    )
}