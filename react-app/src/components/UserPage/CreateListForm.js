import { useState} from "react"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { createList } from '../../store/list'
import { Modal } from '../../context/Modal'

const CreateListForm = () => {
   
    const dispatch = useDispatch();
    const currentUser = useSelector(state => (state.session))
    const history = useHistory();
    // console.log('currentuser from create form', currentUser)

    const [listName, setListName] = useState('')
    const [showModal, setShowModal] = useState(false)
    
    const updateListName = e => setListName(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("listName", listName);
        // console.log("form data from create list form", formData)
        dispatch(createList(formData))
        setShowModal(false)
        setListName('')
        history.push(`/users/${currentUser?.user?.id}`)
        
    }

    return(
        <>
        {currentUser !== null
        ?
        <div>
            <button onClick={() => setShowModal(true)}>Create a New List</button>
            {showModal && (
                <Modal  onClose={() => setShowModal(false)}>
                    <form className='newList' onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="listName" placeholder="Name Your List" value={listName} onChange={updateListName}/>
                             <button id='submit-button' type='submit'>Submit</button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
        : null
        }
        </>
    )
}

export default CreateListForm;


// import { useState} from "react"
// import { useHistory, useParams } from "react-router-dom";
// import { useDispatch, useSelector} from 'react-redux'
// import { createList } from '../../store/list'

// const CreateListForm = () => {
//     const {id} = useParams();
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const [listName, setListName] = useState('')
    
//     const updateListName = e => setListName(e.target.value)

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append("listName", listName);
//         console.log("form data from create list form", formData)
//         dispatch(createList(formData))
//         // history.pushState('/')
//     }

//     return(
//         <div>
//             <h2>Create a new List</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input type="text" name="listName" placeholder="Name Your List" value={listName} onChange={updateListName}/>
//                 </div>
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default CreateListForm;