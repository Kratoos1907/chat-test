
import './massage.css'
import React from 'react'
export default function Massage({massage}) {

  const renderContent = () => {
    if(massage.owner){
      return (
        <div className="coverMassageOwn">
          <p className='massageOwn'>{massage.massage}</p>
          <p>{massage.time_date}</p>
        </div>
      )
    } else {
      return (
        <div className="coverMassageSent">
          <p className='avatar' >AVA</p>
          <div className='coverInfo' >
            <p className='massageSent'>{massage.massage}</p>
            <p>{massage.time_date}</p>
          </div>
        </div>
      )
    }
  }
 return <>{renderContent()}</>
}
