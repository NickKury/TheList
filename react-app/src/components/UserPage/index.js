import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import CreateListForm from './CreateListForm';
import Follow from './Follow';
import UserLists from './UserLists';
import UserFollowList from './UserFollowList'
import './UserPage.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams(); //gets userpage user
  const currentUser = useSelector(state => (state.session))
  // const followings = user.follows

  // console.log('followings from user page', userId, currentUser.user?.id)

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
      <div className='user-page'>
        <ul className='user-info'>
            {/* <li>
                <strong>User Id</strong> {userId}
            </li> */}
            <div>
                <strong>Username</strong> {user.username}
            </div>
            <div>
                <strong>Email</strong> {user.email}
            </div>
            <div>
            {currentUser.user?.id === Number(userId) 
              ? 
                  <CreateListForm/>
              : 
                // <div>
                  <Follow />
                // </div>
              }
              </div>
        </ul>
            <strong className='user-lists'> {user.username}'s Lists
              <UserLists id={userId}/>
            </strong>
            <div className='user-follows'>
              Users Follows
              <UserFollowList id={userId}/>
            </div>
      </div>
  );
}
export default User;

