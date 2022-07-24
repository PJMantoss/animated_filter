import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import './App.css';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=aa3f395118eda0937800db0cba5a6b63&language=en-US&page=1';

  useEffect(() => {
      const fetchPopMovies = async () => {
        const data = await fetch(URL);
        const movies = await data.json();
        console.log(movies.results);
        setPopular(movies.results);
        setFiltered(movies.results);
      };
    fetchPopMovies();
  }, [])

  return (
    <div className="App">
      <Filter 
        popular={popular} 
        setFiltered={setFiltered} 
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className='popularMovies'>
        {popular.map(movie => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default App;