import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { renderAllLists } from "../../store/list";
import { renderAllMovies } from "../../store/movie";
import RemoveMovie from "./RemoveMovie";

const ListMovies = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const listId = useParams();
    const movies = useSelector(state => Object.values(state.movie))
    const a = useSelector(state => Object.values(state.list))
    console.log('a from listmovies', movies)

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
