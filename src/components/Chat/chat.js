import React from 'react';
import DialogWindow from './DialogWindow/dialogWindow';
import UserInfoWithSearch from './UserInfoWithSearch/UserInfoWithSearch';
import './chat.css'

export default function ChatComponents({name}) {
    return(
        <div className='coverChatComponents'>
            <UserInfoWithSearch/>
            <DialogWindow/>
        </div>
    )
}