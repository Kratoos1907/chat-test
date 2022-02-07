import React, { useState } from 'react';
import CardHead from './CardHead/cardHead';
import ChatUsers from './Users/users';
import './UserInfoWithSearch.css'

export default function UserInfoWithSearch({usersData,setData, setActiveDialog, activeDialog}) {
  const [searchValue, setSearchValue] = useState('');

    return(
        <div className='coverUserInfoWithSearch'>
          <CardHead setData={setData} data={usersData} setSearchValue={setSearchValue} />
          <ChatUsers 
            data={usersData} 
            setData={setData} 
            activeDialog={activeDialog} 
            setActiveDialog={setActiveDialog} 
            searchValue={searchValue}
            />
        </div>
    )
}