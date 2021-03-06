import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../../store/user";
// import { Link } from "react-router-dom"

const UserFollowList = ({id}) => {

    const dispatch = useDispatch()
    // const {id} = useParams()
    const user = useSelector(state => state.user)
    const followings = user.follows
    // console.log('followings from userfollowlist', user)

    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch, id])

    return( 
        <div>
            {followings?.map((follow) => (
                <div key={follow}>
                    {follow}
                </div>
            ))}
        </div>
    )
}

export default UserFollowList;

