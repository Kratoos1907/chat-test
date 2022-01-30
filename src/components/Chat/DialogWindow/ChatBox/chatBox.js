import React from 'react'
import './chatBox.css'
import Massage from './Massage/massage'
export default function ChatBox() {
  const massages = [
    {
      time_date: '12.12.12',
      massage: 'coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox  coverChatBox coverChatBox',
      owner: true,
    },
    {
      time_date: '12.12.12',
      massage: 'not my massage',
      owner: false, 
    },
    {
      time_date: '12.12.12',
      massage: 'coverChatBox',
      owner: true,
    },
    {
      time_date: '12.12.12',
      massage: 'not my massage not my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massage',
      owner: false, 
    },
    {
      time_date: '12.12.12',
      massage: 'coverChatBox',
      owner: true,
    },
    {
      time_date: '12.12.12',
      massage: 'not my massage not my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massage',
      owner: false, 
    },
    {
      time_date: '12.12.12',
      massage: 'coverChatBox',
      owner: true,
    },
    {
      time_date: '12.12.12',
      massage: 'not my massage not my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massage',
      owner: false, 
    },
    {
      time_date: '12.12.12',
      massage: 'coverChatBox',
      owner: true,
    },
    {
      time_date: '12.12.12',
      massage: 'not my massage not my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massagenot my massage',
      owner: false, 
    },
  ]
  return (
      <div className="coverChatBox">
        {
          massages.map (massage => {
            return <Massage massage={massage} key={massage.massage}/>
          })
        }
      </div>
  )
}
