import React, { useEffect } from 'react';
import DialogWindow from './DialogWindow/dialogWindow';
import UserInfoWithSearch from './UserInfoWithSearch/UserInfoWithSearch';
import './chat.css'
import PreviewChatNotSelected from './DialogWindow/PreviewChatNotSelected/previewChatNotSelected';
import { useState } from 'react/cjs/react.development';
const usersData = [
  {
    id:'0',
    user_photo: 'o l',
    name: 'oleg',
    last_name: 'lioda',
    // user_photo: name.substring(1),
    time: '12.12.12',
    last_massage:   {
      time_date: 1643660631,
      massage: 'last massage',
      owner: true,
    },
    massages: [
      {
        time_date: '1643660631',
        massage: 'my$$$$$$$$$$$4 massage',
        owner: true,
      },
      {
        time_date: '1643660631',
        massage: 'not my massage',
        owner: false, 
      },
    ],
  },
  {
    id:'1',
    user_photo: 'n l',
    name: 'nastia',
    last_name: 'test',
    time: '12.12.12',
    last_massage:   {
      time_date: 1643660631,
      massage: 'last massage',
      owner: true,
    },
    massages: [
      {
        time_date: '1643660631',
        massage: 'my @@@@@@@@@@@@@@ massage',
        owner: true,
      },
      {
        time_date: '1643660631',
        massage: 'not my massage',
        owner: false, 
      },
    ],
  },
  {
    id:'2',
    user_photo: 'r y',
    name: 'roman',
    last_name: 'yellow',
    time: '12.12.12',
    last_massage:   {
        time_date: 1643660631,
        massage: 'last massage',
        owner: true,
    },
    massages: [
      {
        time_date: '1643660631',
        massage: 'my new !!!!!!!!!! massage',
        owner: true,
      },
      {
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
    if(!localStorage.getItem('users_data')) {
      // console.log('!!!!!!!!!!!!!!!!!!');
      localStorage.setItem('users_data', JSON.stringify(usersData));
    } else if(activeDialog) {
      // console.log('@@@@@@@@@@@@@@@@');
      
      const dataStorage = JSON.parse(localStorage.getItem('users_data'));
      localStorage.removeItem('users_data');
      
      const getObg = dataStorage.find(user => user.id === activeDialog.id )
      
      dataStorage.splice(dataStorage.indexOf(getObg), 1);
      
      dataStorage.push(activeDialog)

      localStorage.setItem('users_data', JSON.stringify(dataStorage));
      setData(dataStorage)
    } 
  },[activeDialog])

  // console.log(activeDialog);
  // console.log(data);

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