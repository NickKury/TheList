import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderOneList } from "../../store/list";


const ListPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const list = useSelector(state => state.list)
    console.log('list from listPage', list)


    useEffect(() => {
        dispatch(renderOneList(id))
    }, [dispatch, id])

    return(
        <div>
            List Page
            <p>{list?.listName}</p>
            <p>{list?.user_id}</p>
        </div>
    )
}

export default ListPage;