import React, { useEffect, useState } from 'react';
import CardHead from './CardHead/cardHead';
import Search from './CardHead/Search/search';
import ChatUsers from './Users/users';

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