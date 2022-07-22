import './App.css';

function App() {

  const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=aa3f395118eda0937800db0cba5a6b63&language=en-US&page=1';

  try{
    const fetchPopMovies = async () => {
      const data = await fetch(URL);
    };
  }catch(err){
    console.log(err)
  };

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;