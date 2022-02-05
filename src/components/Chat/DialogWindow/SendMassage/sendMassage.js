
import './sendMassage.css'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
// import { useState } from 'react/cjs/react.development'
import axios from 'axios';
export default function SendMassage({setActiveDialog, data, setData, activeDialog}) {

  const [valueMessage, setValueMessage] = useState('');
  const [valueOtherMessage, setValueOtherMessage] = useState('');
  const UTCDate = moment().unix();
  const [allMeseges, setAllMessages] = useState(activeDialog.massages)

  const pushObject = (message) => {
    const findObj =  data.find((usr) => usr.id === activeDialog.id);
    
    data.splice(data.indexOf(findObj), 1);
    
    findObj.last_massage = message;
    setData([...data, findObj ])
    
    setAllMessages([...allMeseges, message ])
  } 

  const sendData = (eCode) => {
    if (eCode === 'Enter' && valueMessage.trim().length) {
      const message = {
        time_date: UTCDate,
        massage: valueMessage,
        owner: true, 
      };
      pushObject(message);
      setActiveDialog({...activeDialog, last_massage: message});
      setValueMessage('');
      setTimeout(()=> {getOtherMessage()}, 2000);
    } 
  }

  const getOtherMessage = async () => {
      await axios.get('https://api.chucknorris.io/jokes/random')
      .then((res)=> {
        setValueOtherMessage(res.data.value)
      }).catch((rej)=> {
        console.log(rej);
      })
  } 
  useEffect(()=>{
    const messageSent = {
      time_date: UTCDate,
      massage: valueOtherMessage,
      owner: false, 
    };
    if(valueOtherMessage){
      pushObject(messageSent);
      setActiveDialog({...activeDialog, last_massage: messageSent});
    }
    setValueOtherMessage('')
  },[valueOtherMessage])

  useEffect(()=>{
    setActiveDialog({...activeDialog, massages: allMeseges});
  },[allMeseges])

  return (
    <div className="sendMassage">
        <input 
          className='enterMessage'
          value={valueMessage}
          placeholder='Type your message:'
          onChange={(e)=> {setValueMessage(e.target.value)}}
          onKeyDown={(e) =>  sendData(e.code) }
        />
    </div>
  )
}
