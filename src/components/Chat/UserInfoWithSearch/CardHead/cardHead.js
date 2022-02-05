import React, { useState } from 'react';
import Search from './Search/search';
import './cardHead.css'
// import { useState } from 'react/cjs/react.development';
import AddNewUser from './AddNewUser/addNewUser';

export default function CardHead({setSearchValue, }) {
  const [open, setOpen] = useState(false);
    return(
        <div className='coverCardHead'>
          <div className='cover'>
            <p className='mainUser'>OL</p>

            <div className='addAcc' onClick={()=> setOpen(true)}/>
          </div>
          <Search setSearchValue={setSearchValue} />
          {open && <AddNewUser setOpen={setOpen}/> }
        </div>
    )
}