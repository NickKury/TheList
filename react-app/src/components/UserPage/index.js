import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreateListForm from './CreateListForm';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

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
        <CreateListForm/>
      </div>
  );
}
export default User;
