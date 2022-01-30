import React from 'react';
import Search from './Search/search';
import './cardHead.css'

export default function CardHead({setSearchValue}) {
    return(
        <div className='coverCardHead'>
          <Search setSearchValue={setSearchValue} />
        </div>
    )
}