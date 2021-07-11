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
    const lists = useSelector(state => Object.values(state?.list)) //all lists
    // filter lists for list.id == Num id
    const list = lists.filter(list => list.id == id)
    const currentUser = useSelector(state => (state.session))
    console.log('list from listPage', list)


    useEffect(() => {
        console.log('id from ')
        dispatch(renderOneList(id))
    }, [dispatch, id])

    return(
        <div className='list-page'> 
            {/* <div className='delete-list'>
            </div> */}
            <div className='list-info'>
                <strong>{list[0]?.listName}</strong>
                <div>
                    <Link to={`/users/${list[0]?.user_id}`}>See more lists from this user</Link>
                </div>
            {list[0]?.user_id === currentUser.user?.id
            ?
                <DeleteList list={list}/>
            : null}
            </div>
            <h2 className='list-title'>  {`${list[0]?.listName}'s Movies`} </h2>
            <strong className='list-movies'>
            <ListMovies/>
            </strong>
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