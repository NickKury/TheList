import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { renderUserLists } from "../../store/list";
import { Link } from "react-router-dom"

function UserLists(id) {
    const dispatch = useDispatch();
    // const {slug} = useParams();
    const lists = useSelector(state => Object.values(state.list));
    const user = useSelector(state => state.session.user)
    

    useEffect(() => {
        dispatch(renderUserLists(id.id))
    }, [dispatch])

    return(
        <div> User's Lists
            {lists?.map((list) => (
                <div key={list.id}>
                    <Link to={`/lists/${list.id}`}>  listname: {list?.listName} </Link>
                </div>
            ))}
        </div>
    )
}

export default UserLists;