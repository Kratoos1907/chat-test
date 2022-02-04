import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import User from './user';

export default function ChatUsers({setData, data, setActiveDialog, activeDialog, searchValue}) {
  const [sortData, setSortData] = useState(data);
  const [fillterUserData, setFillterUserData] = useState([]);

    const sortDialogsByLastMassageTime = () => {
     const sort = data.sort((a,b)=>{
       return b.last_massage.time_date - a.last_massage.time_date;
      });
      setData(sort)
      return sort
    };

    useEffect(()=> {
      setSortData(sortDialogsByLastMassageTime())
    },[activeDialog, data]);
    
    const findUser = () => {
      return sortData.filter(user => {
        const fullName = user.name + user.last_name; 
        console.log(user);
        console.log(fullName.includes(searchValue.trim()));
        return fullName.includes(searchValue.trim())
        
      })
    }

    useEffect(()=>{
      setFillterUserData(findUser());
    }, [searchValue])

    return(
        <div>
            { fillterUserData.map(user => {
                return <User 
                          setActiveDialog={setActiveDialog} 
                          user_data={user} 
                          activeDialog={activeDialog}
                          key={user.name}
                        />
            })}
        </div>
    )
}