import React, { useState } from 'react';
import UserContext from './index';
import Cookies from 'js-cookie';

const UserProvider = (props) => {
  const initialCookie = Cookies.get('user') || null;
  const initialState = initialCookie !== null ? JSON.parse(initialCookie) : null;  
  const [user, setUser] = useState(initialState);
  const setUserSession = (userProfile) => {
    Cookies.set('user', JSON.stringify(userProfile));
      setUser(userProfile)
  }
  const destroyUserSession = () => {
    Cookies.remove('user');
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