import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import CreateListForm from './CreateListForm';
import Follow from './Follow';
import UserLists from './UserLists';
import UserFollowList from './UserFollowList'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams(); //gets userpage user
  const currentUser = useSelector(state => (state.session))

  console.log('user from user page', currentUser.user.id, userId)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
      <div>
        <ul>
            <li>
                <strong>User Id</strong> {userId}
            </li>
            <li>
                <strong>Username</strong> {user.username}
            </li>
            <li>
                <strong>Email</strong> {user.email}
            </li>
        </ul>
        {currentUser.user?.id == userId 
          ? <div>
              <CreateListForm/>
            </div>
          : null}
            <div>
              <UserLists id={userId}/>
            </div>
            <div>
              <Follow />
            </div>
            <div>
              Users Follows
              <UserFollowList id={userId}/>
            </div>
      </div>
  );
}
export default User;

