import { useDispatch } from "react-redux"
import { followUser, unfollowUser } from "../../store/follow";
import { useHistory, useParams } from "react-router-dom";


const Follow = () => {
    
    const dispatch = useDispatch();
    const { userId }  = useParams();
    

    const handleFollow = (e) => {
        e.preventDefault();
        console.log(userId)
        // const formData = new FormData();
        // formData.append('userId', userId);
        // console.log("form data from follow form", formData)
        dispatch(followUser(userId))
    }

    const handleUnfollow = (e) => {
        e.preventDefault();
        console.log(userId)
        // const formData = new FormData();
        // formData.append('userId', userId);
        // console.log("form data from follow form", formData)
        dispatch(unfollowUser(userId))
    }

    return(
        <>
            <form onSubmit={handleFollow}>
                <button type='submit'>
                    Follow
            </button>
            </form>

            <form onSubmit={handleUnfollow}>
                <button type='submit'>
                    Unfollow
                </button>
            </form>
        
        </>
    )
}
export default Follow