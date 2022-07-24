import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
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
  }, []);

  return (
    <div className="App">
      <Filter 
        popular={popular} 
        setFiltered={setFiltered} 
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div 
        layout
        className='popularMovies'
      >
        <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;