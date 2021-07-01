import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addMovie } from "../../store/list";

const AddMovie = (movie) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector(state => state.session.user);

    const handleAddMovie = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("movie_id", movie.id)
        dispatch(addMovie(formData))
    }

    return(
        <div>
            <form>
                <button onSubmit={handleAddMovie}>
                    Add Movie
                </button>
            </form>
        </div>
    )
}

export default AddMovie;