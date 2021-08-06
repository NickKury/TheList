import { useDispatch, useSelector } from "react-redux"
import { followUser, unfollowUser } from "../../store/follow";
import {  useParams } from "react-router-dom";
import { useHistory } from "react-router";


const Follow = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const { userId }  = useParams();
    const user = useSelector(state => state.user) //userpage user
    const currentUser = useSelector(state => state.session) // session user
    const followings = currentUser.user?.follows
    // console.log('user from Follow', user.username, followings)
    // console.log(followings.includes(user.username))
    

    const handleFollow = (e) => {
        e.preventDefault();
        // console.log(userId)
        dispatch(followUser(userId))
        history.push('/')
        history.goBack()
    }

    const handleUnfollow = (e) => {
        e.preventDefault();
        // console.log(userId)
        dispatch(unfollowUser(userId))
        history.push('/')
        history.goBack()
    }

    return(
        <>
        {followings?.includes(user.username)
        ?
                <form onSubmit={handleUnfollow}>
                    <button type='submit'>
                        Unfollow
                    </button>
                 </form>
        :
                <form onSubmit={handleFollow}>
                    <button type='submit'>
                            Follow
                    </button>
                </form>
        }
        </>
    )
}
export default Follow

// {followings.map((following) => (
//             <div>
//             {following === user.username
//             ?
//             : }
//             </div>)
//           )}