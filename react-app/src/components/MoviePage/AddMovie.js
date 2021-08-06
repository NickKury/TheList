import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
// import { useHistory, useParams } from "react-router-dom"
import { addMovie, renderUserLists } from "../../store/list";
// import AllLists from "../HomePage/AllLists";
import { Modal } from '../../context/Modal'


const AddMovie = ({movie}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const lists = useSelector(state => Object.values(state.list))
    const [list, setList] = useState('') 
    const [showModal, setShowModal] = useState(false);
    // console.log('list from addmovie', lists)

    
    useEffect(()=> {
        dispatch(renderUserLists(user.id))
    }, [dispatch, movie, user.id])

    const handleAddMovie = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("list_id", list)
        formData.append("movie_id", movie.id)
        dispatch(addMovie(formData))
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
                    <option key={list.id} value={list.id}> Select a List </option>
                            {lists?.map(list => 
                            <option key={list?.id} value={list?.id}>
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