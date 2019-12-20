import React, { useState } from 'react';
import UserContext from './index';

const UserProvider = (props) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const setUserSession = (userProfile) => {
      localStorage.setItem('user', JSON.stringify(userProfile));
      setUser(userProfile)
  }
  const destroyUserSession = () => {
    localStorage.removeItem('user');
    setUser(null)
  }

  return (
    <UserContext.Provider
      value={{ user, setUserSession, destroyUserSession }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;