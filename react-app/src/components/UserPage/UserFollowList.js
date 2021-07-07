import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../../store/user";

const UserFollowList = ({id}) => {

    const dispatch = useDispatch()
    // const {id} = useParams()
    const user = useSelector(state => state.user)
    const followings = user.follows
    console.log('user from userfollowlist', user)

    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch])

    return( 
        <div>
            {followings?.map((follow) => (
                <div>
                    {follow}
                </div>
            ))}
        </div>
    )
}

export default UserFollowList;