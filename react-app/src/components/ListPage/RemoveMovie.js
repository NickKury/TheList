import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { removeMovie } from "../../store/list";
import { renderAllMovies } from "../../store/movie";

const RemoveMovie = ({movie}) => {
    const dispatch = useDispatch();
    const listId = useParams()
    const list = useSelector(state => state.list)
    const currentUser = useSelector(state => (state.session))
    console.log('list from removeMovie', list)
    
    useEffect(() =>{
        dispatch(renderAllMovies())
    }, [dispatch])
    
    const handleRemoveMovie = (e) => {
        e.preventDefault();
        
        // console.log("list_id and movie.id from removemovie", list.id, movie.id)
        dispatch(removeMovie(Number(listId?.id), movie.id))
    }


    return(
        <>
            {list.list?.user_id === currentUser.user?.id
            ?
                    <button onClick={handleRemoveMovie}>
                        Remove Movie
                    </button> 
            : null}
        </>
    )
}

export default RemoveMovie;