
import ReadMovies from './Components/ReadMovies'
import Layout from './Main_Layout/Layout'

function App(props) {

 // const[movieList,setMovieList]=useState(props.MovieList)
  
  return (
    <>
    {/* {
    movieList.map(movie =>
      <ReadMovies key={movie.id} movie={movie}/>
    )
    } */}
    <Layout movieList ={props.MovieList}/>
    {/* <ReadMovies movieList ={movieList}/> */}
    </>
  )
}

export default App
