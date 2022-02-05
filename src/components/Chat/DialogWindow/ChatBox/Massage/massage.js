
import './massage.css'
import React from 'react'
import moment from 'moment'
export default function Massage({massage, avatar}) {

  const renderContent = () => {
    const date =  moment.unix(massage.time_date).format('MM/DD/YY . HH:mm') 
    // const getFirstLatter = user_data.name.substring(0, 1) + user_data.last_name.substring(0, 1);
    if(massage.owner){
      return (
        <div className="coverMassageOwn">
          <p className='massageOwn'>{massage.massage}</p>
          <p>{date}</p>
        </div>
      )
    } else {
      return (
        <div className="coverMassageSent">
          <p className='avatarWithoutStatus' >{avatar}</p>
          <div className='coverInfo' >
            <p className='massageSent'>{massage.massage}</p>
            <p>{date}</p>
          </div>
        </div>
      )
    }
  }
 return <>{renderContent()}</>
}
