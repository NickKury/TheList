import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { renderAllLists } from "../../store/list";
import { renderListMovies } from "../../store/list";
import RemoveMovie from "./RemoveMovie";

const ListMovies = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    // const listId = useParams();
    const list = useSelector(state => Object.values(state.list))
    const movies = list[1]
    console.log('a from listmovies', list, movies)

    useEffect(() => {
        dispatch(renderListMovies(list.list?.id))
    }, [dispatch])

    

    return(
        <div>
            {movies?.map((movie) => (
                <div key={movie?.id}> 
                    Title: {movie.title}
                    <img src={movie?.poster_path} />
                  <RemoveMovie movie={movie}/>  
                </div>
            ))}
        </div>
     )
}

export default ListMovies;
