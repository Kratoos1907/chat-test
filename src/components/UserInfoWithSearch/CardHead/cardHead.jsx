import React, { useState } from 'react';
import Search from './Search/search';
import './cardHead.css'
// import { useState } from 'react/cjs/react.development';
import AddNewUser from './AddNewUser/addNewUser';

export default function CardHead({setSearchValue, setData, data}) {
  const [open, setOpen] = useState(false);
    return(
        <div className='coverCardHead'>
          <div className='cover'>
            <p className='mainUser'>OL</p>

            <div className='addAcc' onClick={()=> setOpen(true)}/>
          </div>
          <Search setSearchValue={setSearchValue} />
          {open && <AddNewUser data={data}  setData={setData} setOpen={setOpen}/> }
        </div>
    )
}