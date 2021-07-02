import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderAllLists } from "../../store/list";


const AllLists = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => Object.values(state.list))
    console.log('lists from home page',lists)

    useEffect(() => {
        dispatch(renderAllLists())
    }, [dispatch])

    return(
       <div>
           {lists?.map((list) => (
               <div key={list?.id}>
                   listname: {list?.listName}
               </div>
           ))}
       </div>
    )
}

export default AllLists;