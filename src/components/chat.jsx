import React, { useEffect, useState } from 'react';
import DialogWindow from './DialogWindow/dialogWindow';
import UserInfoWithSearch from './UserInfoWithSearch/UserInfoWithSearch';
import './chat.css'
import PreviewChatNotSelected from './DialogWindow/PreviewChatNotSelected/previewChatNotSelected';
// import { useState } from 'react/cjs/react.development';
const usersData = [
  {
    id:'0',
    name: 'oleg',
    last_name: 'lioda',
    last_massage:   {
      time_date: 1643660631,
      massage: 'last massage',
      owner: true,
    },
    massages: [
      {
        user_id: '0',
        time_date: '1643660631',
        massage: 'my$$$$$$$$$$$4 massage',
        owner: true,
      },
      {
        user_id: '0',
        time_date: '1643660631',
        massage: 'not my massage',
        owner: false, 
      },
    ],
  },
  {
    id:'1',
    name: 'nastia',
    last_name: 'test',
    last_massage:   {
      time_date: 1643660631,
      massage: 'last massage',
      owner: true,
    },
    massages: [
      {
        user_id: '1',
        time_date: '1643660631',
        massage: 'my @@@@@@@@@@@@@@ massage',
        owner: true,
      },
      {
        user_id: '1',
        time_date: '1643660631',
        massage: 'not my massage',
        owner: false, 
      },
    ],
  },
  {
    id:'2',
    name: 'roman',
    last_name: 'yellow',
    last_massage:   {
        time_date: 1643660631,
        massage: 'last massage',
        owner: true,
    },
    massages: [
      {
        user_id: '2',
        time_date: '1643660631',
        massage: 'my new !!!!!!!!!! massage',
        owner: true,
      },
      {
        user_id: '2',
        time_date: '1643660631',
        massage: 'not my massage',
        owner: false, 
      },
    ],
  },
];
export default function ChatComponents({name}) {
  const getData = () =>{
    if(!localStorage.getItem('users_data')){
      return usersData
    } else {
      return JSON.parse(localStorage.getItem('users_data'))
    }
  }

  const [data, setData] = useState(getData())
  const [activeDialog, setActiveDialog] = useState(null);

  useEffect(()=> {
    const dataStorage = JSON.parse(localStorage.getItem('users_data'));
    setData(dataStorage);
  },[])
  useEffect(()=> {
    if(!localStorage.getItem('users_data')) {
      localStorage.setItem('users_data', JSON.stringify(data));
    } else if(activeDialog) {
      localStorage.setItem('users_data', JSON.stringify(data));
    } 
  },[activeDialog, data])


  const renderDialogWindow = () => {
    if(activeDialog) return <DialogWindow data={data} setData={setData} activeDialog={activeDialog} setActiveDialog={setActiveDialog} />
    else return <PreviewChatNotSelected />
  }

  return(
    <>{
      data && 
        <div className='coverChatComponents'>
            <UserInfoWithSearch
              usersData={data}
              setData={setData}
              activeDialog={activeDialog}
              setActiveDialog={setActiveDialog}
              />
            {renderDialogWindow()}
        </div>
      }
    </>
    )
}