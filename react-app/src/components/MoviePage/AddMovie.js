import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
// import { useHistory, useParams } from "react-router-dom"
import { addMovie, renderAllLists, renderUserLists } from "../../store/list";
// import AllLists from "../HomePage/AllLists";
import { Modal } from '../../context/Modal'


const AddMovie = ({movie}) => {
    const dispatch = useDispatch();
    // const history = useHistory();
    // const {id} = useParams();
    const user = useSelector(state => state.session.user);
    const lists = useSelector(state => Object.values(state.list))
    // console.log("lists from AddMovie", lists, movie)
    const [list, setList] = useState('') 
    const [showModal, setShowModal] = useState(false);
    // history.push(`/`)
    
    useEffect(()=> {
        // dispatch(renderAllLists())
        dispatch(renderUserLists(user.id))
    }, [dispatch, movie])

    const handleAddMovie = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("list_id", list)
        formData.append("movie_id", movie.id)
        // console.log("formData from addmovie", id)
        dispatch(addMovie(formData))
        // history.push(`/`)
        setShowModal(false)

    }
    
    const chooseList = e => setList(e.target.value) 
    
    return(
        <>
         <button onClick={() => setShowModal(true)}>Select a List</button>
       {showModal && (
           <Modal onClose={() => setShowModal(false)}>
            {/* <div> */}
                <form onSubmit={handleAddMovie}>
                    {/* <AllLists/> */}
                    {/* <div>Select a List</div> */}
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
            {/* </div> */}
            </Modal>
        )}
        </>
    )
}

export default AddMovie;