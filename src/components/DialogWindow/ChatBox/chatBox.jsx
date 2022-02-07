import React from 'react'
import './chatBox.css'
import Massage from './Massage/massage'
export default function ChatBox({data , activeDialog}) {
  const getFirstLatter = activeDialog.name.substring(0, 1) + activeDialog.last_name.substring(0, 1);
  
  function reverseArr(input) {
    const filterMessagesByIdUser = activeDialog && input.filter((massage) => massage.user_id === activeDialog.id )
    var ret = new Array();
    for(var i = filterMessagesByIdUser.length-1; i >= 0; i--) {
        ret.push(filterMessagesByIdUser[i]);
    }
    return ret;
  }
  return (
      <div className="coverChatBox">
        <div className='chatBox'>
          {
           reverseArr(data.massages).map (massage => {
              return <Massage massage={massage} avatar={getFirstLatter} key={Math.random()+massage}/>
            })
          }
        </div>
      </div>
  )
}
