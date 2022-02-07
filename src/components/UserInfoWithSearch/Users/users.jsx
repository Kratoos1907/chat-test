import React, { useEffect, useState } from 'react';
import User from './user';

export default function ChatUsers({setData, data, setActiveDialog, activeDialog, searchValue}) {
  const [sortData, setSortData] = useState(data.users);

  const findUser = () => {
    return data.users.filter(user => {
      const fullName = user.name + user.last_name; 
      return fullName.includes(searchValue.replace(/[ ]/gi, ''))
    })
  }
    const sortDialogsByLastMassageTime = () => {
     const sort = findUser().sort((a,b)=>{
       return b.last_massage.time_date - a.last_massage.time_date;
      });
      return sort
    };

    

    useEffect(()=> {
      setSortData(sortDialogsByLastMassageTime())
    },[activeDialog, searchValue, data]);

    return(
        <div>
            { sortData.map(user => {
                return <User 
                          setActiveDialog={setActiveDialog} 
                          user_data={user}
                          data={data}
                          setData={setData}
                          activeDialog={activeDialog}
                          key={user.id}
                        />
            })}
        </div>
    )
}