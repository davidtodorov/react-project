import React from 'react';
import Form from './Form';
import AuthContainer from '../AuthContainer'

function Login(props) {
  return (
    <AuthContainer>
      <Form/>
    </AuthContainer>
  );
}
export default Login;