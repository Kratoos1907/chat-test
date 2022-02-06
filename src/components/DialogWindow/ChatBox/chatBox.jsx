import React from 'react'
import './chatBox.css'
import Massage from './Massage/massage'
export default function ChatBox({massages}) {
  const reversMessages = massages.massages;
  const getFirstLatter = massages.name.substring(0, 1) + massages.last_name.substring(0, 1);
  
  function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}
  return (
      <div className="coverChatBox">
        <div className='chatBox'>
          {
           reverseArr(reversMessages).map (massage => {
              return <Massage massage={massage} avatar={getFirstLatter} key={Math.random()}/>
            })
          }
        </div>
      </div>
  )
}
