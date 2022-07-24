import React, { useEffect } from 'react';

const Filter = ({activeGenre, setActiveGenre, setFiltered, popular}) => {
    
    useEffect(() => {
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }
    }, [activeGenre]);

  return (
    <div className='filterContainer'>
        <button 
            onClick={() => setActiveGenre(0)}
        >
            All
        </button>
        <button 
            onClick={() => setActiveGenre(28)}
        >
            Action
        </button>
        <button 
            onClick={() => setActiveGenre(35)}
        >
            Comedy
        </button>
        <button 
            onClick={() => setActiveGenre(16)}
        >
            Animation
        </button>
        <button 
            onClick={() => setActiveGenre(80)}
        >
            Crime
        </button>
        <button 
            onClick={() => setActiveGenre(12)}
        >
            Adventure
        </button>
    </div>
  )
}

export default Filter;