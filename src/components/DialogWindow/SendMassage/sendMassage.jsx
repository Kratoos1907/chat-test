
import './sendMassage.css'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios';
export default function SendMassage({setActiveDialog, data, setData, activeDialog}) {
  const UTCDate = moment().unix();

  const [valueMessage, setValueMessage] = useState('');
  const [valueOtherMessage, setValueOtherMessage] = useState('');
  
  const pushObject = (massage) => {
    const nonMassage = document.getElementById('NonMassage');
    if(activeDialog && !!!nonMassage){
      setActiveDialog((prev) => {
        const newUser = {...prev};
        newUser.last_massage = massage;
        return newUser;
      });
    }
    
    setData((prev)=> {
      const newData = {...prev};
      newData.massages = [...newData.massages, massage];
      const getObj = newData.users.find((usr)=> usr.id === activeDialog.id || usr.id === massage.user_id);
      // const getObj = newData.users.find((usr)=> usr.id === massage.user_id);
      getObj.last_massage = massage;
      return newData;
    })
  }
  const sendData = (eCode) => {
    if (eCode === 'Enter' && valueMessage.trim().length) {
      const massage = {
        user_id: activeDialog.id,
        time_date: UTCDate,
        massage: valueMessage,
        owner: true,
        read: true,
      };
      pushObject(massage);
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
      user_id: activeDialog.id,
      time_date: UTCDate,
      massage: valueOtherMessage,
      owner: false, 
      read: true,
    };

    setTimeout(()=> {
        const openDialog = document.getElementById(`${activeDialog.id}-user`)
        
        if(valueOtherMessage){
          if(!!!openDialog){
            messageSent.read = false;
          }
          pushObject(messageSent)
        }
    }, 3000);

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
