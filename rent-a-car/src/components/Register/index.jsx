import React from 'react';
import { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Grid, Box, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../Copyright'
import withForm from '../../shared/withForm'

import schema from './schema'
import userService from '../../services/userService'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: 'red'
  }
}));

function Register(props) {
  const classes = useStyles();
  const getFirstControlError = name => {
    const errorState = props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };
  const submitHandler = () => {
    const errors = props.getFormErrorState();
    if (!!errors) { return; }
    const data = props.getFormState();
    userService.register(data).then(() => {
      props.history.push('/login');
    });
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const firstNameOnChangeHandler = props.controlChangeHandlerFactory('firstName');
  const lastNameOnChangeHandler = props.controlChangeHandlerFactory('lastName');
  const usernameOnChangeHandler = props.controlChangeHandlerFactory('username');
  const passwordOnChangeHandler = props.controlChangeHandlerFactory('password');
  const confirmPasswordOnChangeHandler = props.controlChangeHandlerFactory('rePassword');

  const firstNameError = getFirstControlError('firstName');
  const lastNameError = getFirstControlError('lastName');
  const usernameError = getFirstControlError('username');
  const passwordError = getFirstControlError('password');
  const confirmPasswordError = getFirstControlError('confirmPassword');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate action="post">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(firstNameOnChangeHandler(e))}
              />
              {firstNameError && <div className={classes.error}>{firstNameError}</div>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastName(lastNameOnChangeHandler(e))}
              />
              {lastNameError && <div className={classes.error}>{lastNameError}</div>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(usernameOnChangeHandler(e))}
              />
              {usernameError && <div className={classes.error}>{usernameError}</div>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(passwordOnChangeHandler(e))}
              />
              {passwordError && <div className={classes.error}>{passwordError}</div>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                onChange={(e) => setConfirmPassword(confirmPasswordOnChangeHandler(e))}
              />
              {confirmPasswordError && <div className={classes.error}>{confirmPasswordError}</div>}
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const initialFormState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  rePassword: ''
};

export default withForm(Register, initialFormState, schema)