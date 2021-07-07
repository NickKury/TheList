import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderOneList } from "../../store/list";
import DeleteList from "./DeleteList";
import ListMovies from "./ListMovies";
import './ListPage.css'


const ListPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const list = useSelector(state => state.list)
    // console.log('list from listPage', list.list?.listName)


    useEffect(() => {
        dispatch(renderOneList(id))
    }, [dispatch, id])

    return(
        <div className='list-page'> List Page
            <div className='delete-list'>
            </div>
            <div className='list-info'>
                <p>listname: {list.list?.listName}</p>
                <p>user id: {list.list?.user_id}</p>
                <p>List id: {list.list?.id}</p>
                <DeleteList list={list}/>
            </div>
            <div className='list-movies'>
            <ListMovies/>
            </div>
            <div className='share-list'>
                Share
            </div>
            <div className='change-list'>
               Change List
            </div>
        </div>
    )
}

export default ListPage;