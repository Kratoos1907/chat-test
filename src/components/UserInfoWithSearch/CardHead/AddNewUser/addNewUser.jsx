
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
      user_photo: 'o l',
      name: name,
      last_name: lastName,
      time: '12.12.12',
      last_massage:   {
        time_date: UTCDate,
        massage: '',
        owner: true,
      },
      massages: [
        {
          time_date: '1643660631',
          massage: 'my$$$$$$$$$$$4 massage',
          owner: true,
        }
      ],
    }
    console.log(new_user);
    setData([...data, new_user]);
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
