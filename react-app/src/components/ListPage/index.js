import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderOneList } from "../../store/list";
import DeleteList from "./DeleteList";
import ListMovies from "./ListMovies";


const ListPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const list = useSelector(state => state.list)
    // console.log('list from listPage', list)


    useEffect(() => {
        dispatch(renderOneList(id))
    }, [dispatch, id])

    return(
        <div>
            List Page
            <DeleteList list={list}/>
            <p>listname: {list?.listName}</p>
            <p>user id: {list?.user_id}</p>
            <p>List id: {list?.id}</p>
            <ListMovies/>
        </div>
    )
}

export default ListPage;