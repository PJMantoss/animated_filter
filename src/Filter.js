import React, { useEffect } from 'react';

const Filter = ({activeGenre, setActiveGenre, setFiltered, popular}) => {
    
    useEffect(() => {
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }

        const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre));

        setFiltered(filtered);
    }, [activeGenre]);

  return (
    <div className='filterContainer'>
        <button 
            onClick={() => setActiveGenre(0)}
            className={activeGenre === 0 ? 'active' : 0}
        >
            All
        </button>
        <button 
            onClick={() => setActiveGenre(28)}
            className={activeGenre === 28 ? 'active' : 0}
        >
            Action
        </button>
        <button 
            onClick={() => setActiveGenre(35)}
            className={activeGenre === 35 ? 'active' : 0}
        >
            Comedy
        </button>
        <button 
            onClick={() => setActiveGenre(16)}
            className={activeGenre === 16 ? 'active' : 0}
        >
            Animation
        </button>
        <button 
            onClick={() => setActiveGenre(80)}
            className={activeGenre === 80 ? 'active' : 0}
        >
            Crime
        </button>
        <button 
            onClick={() => setActiveGenre(12)}
            className={activeGenre === 12 ? 'active' : 0}
        >
            Adventure
        </button>
    </div>
  )
}

export default Filter;