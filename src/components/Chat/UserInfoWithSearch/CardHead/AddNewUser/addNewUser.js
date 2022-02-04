
import './addNewUser.css'
import React from 'react'
import { useState } from 'react/cjs/react.development'
export default function AddNewUser({setOpen}) {
const [name, setName] = useState('')
const [lastName, setLastName] = useState('')

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
          <button className='sumbitButton' onClick={()=>console.table({name, lastName})}>Sumbit</button>
        </div>
      </div>
    </>
  )
}
