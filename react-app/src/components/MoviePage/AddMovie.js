import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addMovie, renderAllLists } from "../../store/list";
import AllLists from "../HomePage/AllLists";


const AddMovie = ({movie}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector(state => state.session.user);
    const lists = useSelector(state => Object.values(state.list))
    console.log("lists from AddMovie", lists, user)
    const [list, setList] = useState('') 

    
    useEffect(()=> {
        dispatch(renderAllLists())
    }, [dispatch])

    const handleAddMovie = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("list_id", list)
        formData.append("movie_id", movie.id)
        // console.log("formData from addmovie", list, movie.id)
        dispatch(addMovie(formData))

    }
    
    const chooseList = e => setList(e.target.value) 
    
    return(
        <div>
            <form onSubmit={handleAddMovie}>
                {/* <AllLists/> */}
                <div>Select a List</div>
                <select onChange={chooseList} value={list}> 
                        {lists?.map(list => 
                        <option key={list?.id} value={list.id}>
                            {list?.listName}
                        </option>
                        )}
                </select>
                <button type='submit'>
                    Add Movie
                </button>
            </form>
        </div>
    )
}

export default AddMovie;