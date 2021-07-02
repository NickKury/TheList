import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useParams } from "react-router";
import { removeMovie } from "../../store/list";
import { renderAllMovies } from "../../store/movie";

const RemoveMovie = ({movie}) => {
    const dispatch = useDispatch();
    const list = useParams()
    
    
    useEffect(() =>{
        dispatch(renderAllMovies())
    }, [dispatch])
    
    const handleRemoveMovie = (e) => {
        e.preventDefault();
        
        console.log("list_id and movie.id from removemovie", list.id, movie.id)
        dispatch(removeMovie(Number(list.id), movie.id))
    }


    return(
        <div>
            <button onClick={handleRemoveMovie}>
                Remove Movie
            </button>
        </div>
    )
}

export default RemoveMovie;