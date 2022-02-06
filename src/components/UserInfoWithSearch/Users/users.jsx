import React, { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react/cjs/react.development';
import User from './user';

export default function ChatUsers({setData, data, setActiveDialog, activeDialog, searchValue}) {
  const [sortData, setSortData] = useState(data);
  const [fillterUserData, setFillterUserData] = useState([]);

  const findUser = () => {
    return data.filter(user => {
      const fullName = user.name + user.last_name; 
      return fullName.includes(searchValue.replace(/[ ]/gi, ''))
      // return fullName.includes(searchValue.trim())
    })
  }
    const sortDialogsByLastMassageTime = () => {
     const sort = findUser().sort((a,b)=>{
       return b.last_massage.time_date - a.last_massage.time_date;
      });
      // setData(sort)
      return sort
    };

    useEffect(()=> {
      setSortData(sortDialogsByLastMassageTime())
    },[activeDialog, searchValue, data]);
    
    // useEffect(()=>{
    //   setFillterUserData(findUser());
    // }, [searchValue])

    return(
        <div>
            { sortData.map(user => {
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