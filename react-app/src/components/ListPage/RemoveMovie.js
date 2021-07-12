import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { removeMovie } from "../../store/list";
import { renderAllMovies } from "../../store/movie";

const RemoveMovie = ({movie}) => {
    const dispatch = useDispatch();
    const listId = useParams()
    const list = useSelector(state => Object.values(state.list))
    const currentList = list[0]
    const currentUser = useSelector(state => (state.session))
    
    useEffect(() =>{
        dispatch(renderAllMovies())
    }, [dispatch])
    
    const handleRemoveMovie = (e) => {
        e.preventDefault();

        dispatch(removeMovie(Number(listId?.id), movie.id))
    }


    return(
        <>
            {currentList.user_id === currentUser.user?.id
            ?
                    <button onClick={handleRemoveMovie}>
                        Remove Movie
                    </button> 
            : null}
        </>
    )
}

export default RemoveMovie;