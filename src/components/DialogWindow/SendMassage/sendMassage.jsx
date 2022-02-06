
import './sendMassage.css'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios';
export default function SendMassage({setActiveDialog, data, setData, activeDialog}) {
  const UTCDate = moment().unix();

  const [valueMessage, setValueMessage] = useState('');
  const [valueOtherMessage, setValueOtherMessage] = useState('');
  
  const [allMeseges, setAllMessages] = useState([]);
  useEffect(()=> {
    setAllMessages(activeDialog.massages)
  },[activeDialog.massages])

  const pushObject = (message) => {
    const new_massages = [...allMeseges, message];
    const updateActiveDialog = {...activeDialog, last_massage: message, massages: new_massages }

    const findObj = data.find((usr) => usr.id === activeDialog.id);

    data.splice(data.indexOf(findObj), 1);
    
    setActiveDialog(updateActiveDialog)
    setAllMessages(new_massages);
    
    setData([...data, updateActiveDialog ])
  }

  const sendData = (eCode) => {
    if (eCode === 'Enter' && valueMessage.trim().length) {
      const message = {
        time_date: UTCDate,
        massage: valueMessage,
        owner: true, 
      };
      pushObject(message);
      setValueMessage('');
      getOtherMessage();
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
      setTimeout(()=> {pushObject(messageSent)},2000);
    }
    setValueOtherMessage('')
  },[valueOtherMessage])


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
