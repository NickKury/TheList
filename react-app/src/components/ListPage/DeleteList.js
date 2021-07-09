import { useDispatch, useSelector } from "react-redux" 
import { useHistory } from "react-router-dom"
import { deleteList } from "../../store/list";
import {useParams} from "react-router-dom"

const DeleteList = (list) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const user = useSelector(state => state.session.user)
    // console.log('look here', id)

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteList(Number(id)));
        console.log(`deleted list ${id}`)
        history.push(`/users/${user.id}`);
    }

    return (
        <div>
            <button onClick={handleDelete}>
                Delete List
            </button>
        </div>
    )
}

export default DeleteList;