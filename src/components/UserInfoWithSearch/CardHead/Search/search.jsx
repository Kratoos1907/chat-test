import React from 'react';
import './search.css'
export default function Search({setSearchValue}) {
    return(
        <div className='coverSearch'>
          <input 
            placeholder='find user' 
            onChange={(e)=> setSearchValue(e.target.value)}
          />
        </div>
    )
}