import { useDispatch } from "react-redux" 
import { useHistory } from "react-router-dom"
import { deleteList } from "../../store/list";

const DeleteList = ({list}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector(state => state.session.user)

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteList(list.id));
        console.log(`deleted list ${list.id}`)
        history.push('/');
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