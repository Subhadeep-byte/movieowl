import "../css/Favorites.css"
import { useMovieContext} from "../contexts/MovieContext"
import MoviesCard from "../components/MoviesCard"
function Favorites(){
   const {favorites} = useMovieContext();

   if(favorites){
    return (
    <div className="favorites">
        <h2>Your Favorites</h2>
    <div className="movies-grid"> 
    {favorites.map((movie) => (
       <MoviesCard movie={movie} key={movie.id}/>)
         )}
         </div>
</div>);
   }
    return <div className="favorites-empty">
   <h2> No favorites Movies yet...</h2>
   <p>Start Adding movies to your Favorites  and they will start to appear here!</p>
    </div>
}
export default Favorites