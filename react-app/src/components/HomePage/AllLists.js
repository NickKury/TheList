import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderAllLists } from "../../store/list";
import { Link } from "react-router-dom"



const AllLists = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => Object.values(state.list))
    console.log('lists from home page',lists)

    useEffect(() => {
        dispatch(renderAllLists())
    }, [dispatch, lists])

    return(
       <ul>
           {lists?.map((list) => (
               <li key={list.listName}>
                 <Link to={`/lists/${list.id}`}>{list?.listName} </Link>
               </li>
           ))}
       </ul>
    )
}

export default AllLists;