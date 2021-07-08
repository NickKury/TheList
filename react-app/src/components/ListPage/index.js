import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderOneList } from "../../store/list";
import DeleteList from "./DeleteList";
import ListMovies from "./ListMovies";
import { Link } from "react-router-dom";
import './ListPage.css'


const ListPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const list = useSelector(state => state.list)
    console.log('list from listPage', list)


    useEffect(() => {
        dispatch(renderOneList(id))
    }, [dispatch, id])

    return(
        <div className='list-page'> List Page
            <div className='delete-list'>
            </div>
            <div className='list-info'>
                <strong>{list.list?.listName}</strong>
                <div>
                <Link to={`/users/${list.list?.user_id}`}>See more lists from this user</Link>
                {/* <p>List id: {list.list?.id}</p> */}
                </div>
                <DeleteList list={list}/>
            </div>
            <div className='list-movies'> {`${list.list?.listName}'s Movies`}
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