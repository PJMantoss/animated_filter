import React, { useEffect } from 'react';

const Filter = ({activeGenre, setActiveGenre, setFiltered, popular}) => {
  return (
    <div className='filterContainer'>
        <button 
            onClick={() => setActiveGenre(0)} 
            className=''
        >
            All
        </button>
        <button 
            onClick={() => setActiveGenre(28)} 
            className=''
        >
            Action
        </button>
        <button 
            onClick={() => setActiveGenre(35)} 
            className=''
        >
            Comedy
        </button>
        <button 
            onClick={() => setActiveGenre(16)} 
            className=''
        >
            Animation
        </button>
        <button 
            onClick={() => setActiveGenre(80)} 
            className=''
        >
            Crime
        </button>
        <button 
            onClick={() => setActiveGenre(12)} 
            className=''
        >
            Adventure
        </button>
    </div>
  )
}

export default Filter;