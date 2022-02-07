
import './addNewUser.css'
import React, { useState } from 'react'
import moment from 'moment';

export default function AddNewUser({setOpen, setData, data}) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const UTCDate = moment().unix();

  const addUser = () => {
    const id_user = Math.random();
    const new_user = {
      id: id_user,
      name: name,
      last_name: lastName,
      last_massage:   {
        time_date: UTCDate,
        massage: '',
        owner: true,
      },
    }
    setData((prev) => {
      const allData = {...prev}
      allData.users.push(new_user);
      return allData
    });
    setOpen(false);
  }
  return (
    <>
    <div className='BGAddNewUser' onClick={()=>setOpen(false)}></div>
      <div className="addNewUser" >
        <div className='exit'onClick={()=>setOpen(false)}></div>
        <div className='newChat'>
          <input 
            placeholder='Enter name:' 
            onChange={(e)=> setName(e.target.value)}
            />
          <input
            placeholder='Enter last name:' 
            onChange={(e)=> setLastName(e.target.value)}
          />
          <button className='sumbitButton' onClick={()=>addUser()}>Sumbit</button>
        </div>
      </div>
    </>
  )
}
