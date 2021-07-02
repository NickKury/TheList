import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderOneMovie } from "../../store/movie";
import AddMovie from "./AddMovie";


const MoviePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie)


    useEffect(() => {
        dispatch(renderOneMovie(id))
    }, [dispatch, id])

    return(
        <div> Movie Page
            <p>{movie?.title}</p>
            <p>{movie?.description}</p>
            <p>{movie?.platform}</p>
            <AddMovie movie={movie}/>
        </div>
    )
}

export default MoviePage;