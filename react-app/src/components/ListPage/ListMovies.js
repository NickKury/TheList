import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderAllLists } from "../../store/list";
import { renderAllMovies } from "../../store/movie";
import RemoveMovie from "./RemoveMovie";

const ListMovies = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const movies = useSelector(state => Object.values(state.movie))
    console.log('movies from listmovies', movies)

    useEffect(() => {
        dispatch(renderAllMovies())
    }, [dispatch])

    

    return(
        <div>
            {movies?.map((movie) => (
                <div key={movie?.id}> 
                    moviename: {movie.title}
                  <RemoveMovie movie={movie}/>  
                </div>
            ))}
        </div>
     )
}

export default ListMovies;
