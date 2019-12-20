import React, { Fragment } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Grid, Box, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withForm from '../../../shared/withForm'
import useStyles from '../useStyles';
import { useHistory } from "react-router-dom"
import userService from '../../../services/userService'

function Form(props) {
  const classes = useStyles();
  const history = useHistory();

  const getFirstControlError = name => {
    const errorState = props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  const submitHandler = () => {
    const errors = props.getFormErrorState();
    if (!!errors) { return; }
    const data = props.getFormState();
    userService.register(data).then(() => {
      history.push('/login');
    });
  };

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
    <Fragment>
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
              onChange={(e) => firstNameOnChangeHandler(e)}
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
              onChange={(e) => lastNameOnChangeHandler(e)}
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
              onChange={(e) => usernameOnChangeHandler(e)}
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
              onChange={(e) => passwordOnChangeHandler(e)}
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
              onChange={(e) => confirmPasswordOnChangeHandler(e)}
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
    </Fragment>
  )
}

const initialFormState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  rePassword: ''
};

export default withForm(Form, initialFormState);