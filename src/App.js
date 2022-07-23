import { useEffect, useState } from 'react';
import Movie from './Movie';
import './App.css';

function App() {
  const [popular, setPopular] = useState([]);

  const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=aa3f395118eda0937800db0cba5a6b63&language=en-US&page=1';

  useEffect(() => {
      const fetchPopMovies = async () => {
        const data = await fetch(URL);
        const movies = await data.json();
        console.log(movies.results);
        setPopular(movies.results);
      };
    fetchPopMovies();
  }, [])

  return (
    <div className="App">
      <div className='popularMovies'>
        {popular.map(movie => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default App;