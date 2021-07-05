import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { renderUserLists } from "../../store/list";


const UserLists = (id) => {
    const dispatch = useDispatch();
    const lists = useSelector(state => Object.values(state.list));
    const user = useSelector(state => state.session.user)
    

    useEffect(() => {
        dispatch(renderUserLists(id.id))
    }, [dispatch])

    return(
        <div> User's Lists
            {lists?.map((list) => (
                <div key={list.id}>
                    {list?.listName}
                </div>
            ))}
        </div>
    )
}

export default UserLists;