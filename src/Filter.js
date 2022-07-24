import React, { useEffect } from 'react';

const Filter = ({activeGenre, setActiveGenre, setFiltered, popular}) => {
  return (
    <div className='filterContainer'>
        <button 
            onClick={() => setActiveGenre(0)} 
            classname=''
        >
            All
        </button>
        <button classname=''>Comedy</button>
        <button classname=''>Action</button>
    </div>
  )
}

export default Filter;