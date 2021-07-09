import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { renderAllLists } from "../../store/list";
import { renderListMovies } from "../../store/list";
import RemoveMovie from "./RemoveMovie";
import { Link } from "react-router-dom";
//try params

const ListMovies = () => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.session?.user);
    const listId = useParams(); //?
    const list = useSelector(state => (state?.list))
    const listMovies = list.movie
    // const movies = list[1]
    // console.log('movies from listmovies', movies, list?.movie, listMovies)

    useEffect(() => {
        dispatch(renderListMovies(listId.id))
    }, [dispatch, listId.id]) //added

    

    return(
        <div>
            {listMovies?.map((movie) => (
                <div key={movie?.title}> 
                    <img src={movie?.poster_path} alt={movie.title} />
                    <div>
                        <Link to={`/movies/${movie?.id}`}> Movie: {movie?.title} </Link>
                        <RemoveMovie movie={movie}/>  
                    </div>
                </div>
            ))}
        </div>
     )
}

export default ListMovies;
