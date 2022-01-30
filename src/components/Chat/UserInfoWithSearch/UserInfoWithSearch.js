import React, { useEffect, useState } from 'react';
import CardHead from './CardHead/cardHead';
import Search from './CardHead/Search/search';
import ChatUsers from './Users/users';

export default function UserInfoWithSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [fillterUserData, setFillterUserData] = useState([]);
  console.log(searchValue);
  const usersData = [
    {
        user_photo: 'o l',
        name: 'oleg',
        last_name: 'lioda',
        time: '12.12.12',
        last_message: 'hello'
    },
    {
        user_photo: 'n l',
        name: 'nastia',
        last_name: 'test',
        time: '12.12.12',
        last_message: 'hello'
    },
    {
        user_photo: 'r y',
        name: 'roman',
        last_name: 'yellow',
        time: '12.12.12',
        last_message: 'nice'
    },
];
    const findUser = () => {
      return usersData.filter(user => {
        const fullName = user.name + user.last_name; 
        return fullName.includes(searchValue.trim())
      })
    }

    useEffect(()=>{
      setFillterUserData(findUser());
    }, [searchValue])

    return(
        <div className='coverUserInfoWithSearch'>
          <CardHead setSearchValue={setSearchValue} />
          <ChatUsers usersData={fillterUserData} />
        </div>
    )
}