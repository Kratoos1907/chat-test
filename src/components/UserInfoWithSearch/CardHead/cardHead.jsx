import React, { useState } from 'react';
import Search from './Search/search';
import './cardHead.css'
import AddNewUser from './AddNewUser/addNewUser';

export default function CardHead({setSearchValue, setData, data}) {
  const [open, setOpen] = useState(false);
  console.log(open);
    return(
        <div className='coverCardHead'>
          <div className='cover'>
            <p className='mainUser'>OL</p>
            <div className="coverCancel" onClick={()=> setOpen(true)}>
              <div className='addAcc'  />
            </div>
          </div>
          <Search setSearchValue={setSearchValue} />
          {open && <AddNewUser data={data}  setData={setData} setOpen={setOpen}/> }
        </div>
    )
}