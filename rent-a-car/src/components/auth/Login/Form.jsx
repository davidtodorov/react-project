import React, { Fragment, useState, useContext  } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Copyright from '../../Copyright'
import userService from '../../../services/userService'
import useStyles from '../useStyles';

import { useHistory } from "react-router-dom"
import UserContext from '../../../contexts/UserContext'

function Form(props) {
  const classes = useStyles();
  const history = useHistory();

  const { user, setUserSession, destroyUserSession } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {username, password};
    userService.login(data).then((result) => {
      setUserSession(result)
      history.push('/');
    }).catch(res => {
      debugger
    });
  };

  return (
    <Fragment>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
          </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={submitHandler}
        >
          Sign In
            </Button>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </Fragment>
  )
}

export default Form;