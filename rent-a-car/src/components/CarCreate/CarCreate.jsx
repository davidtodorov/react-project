import React from 'react';
import { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Grid, Box, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../Copyright'
import withForm from '../../shared/withForm'

import userService from '../../services/userService'
import garageService from '../../services/garageService'

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

const initialFormState = {
  manufactuer: '',
  model: '',
  platteNumber: '',
  description: '',
  thumbnailImageUrl: ''
};

function CarCreate(props) {
  const classes = useStyles();
  const getFirstControlError = name => {
    const errorState = props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };
  const submitHandler = () => {
    const errors = props.getFormErrorState();
    if (!!errors) { return; }
    const data = props.getFormState();
    garageService.add(data).then((data) => {
      debugger;
    });
    // garageService.carCreate(data).then(() => {
    //   props.history.push('/login');
    // });
  };

  const manufactuerOnChangeHandler = props.controlChangeHandlerFactory('manufactuer');
  const modelOnChangeHandler = props.controlChangeHandlerFactory('model');
  const platteOnChangeHandler = props.controlChangeHandlerFactory('platteNumber');
  const descriptionOnChageHandler = props.controlChangeHandlerFactory('description');
  const thumbnailOnChangeHandler = props.controlChangeHandlerFactory('thumbnailImageUrl');

  // const firstNameError = getFirstControlError('firstName');
  // const lastNameError = getFirstControlError('lastName');
  // const usernameError = getFirstControlError('username');
  // const passwordError = getFirstControlError('password');
  // const confirmPasswordError = getFirstControlError('confirmPassword');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CarCreate
        </Typography>
        <form className={classes.form} noValidate action="post">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="manufactuer"
                variant="outlined"
                required
                fullWidth
                id="manufactuer"
                label="manufactuer"
                autoFocus
                onChange={(e) => manufactuerOnChangeHandler(e)}
              />
              {/* {firstNameError && <div className={classes.error}>{firstNameError}</div>} */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="model"
                label="model"
                name="model"
                onChange={(e) => modelOnChangeHandler(e)}
              />
              {/* {lastNameError && <div className={classes.error}>{lastNameError}</div>} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="platteNumber"
                label="platteNumber"
                name="platteNumber"
                onChange={(e) => platteOnChangeHandler(e)}
              />
              {/* {usernameError && <div className={classes.error}>{usernameError}</div>} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Pasdescriptionsword"
                id="description"
                onChange={(e) => descriptionOnChageHandler(e)}
              />
              {/* {passwordError && <div className={classes.error}>{passwordError}</div>} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="thumbnailImageUrl"
                label="thumbnail Image"
                id="thumbnailImageUrl"
                onChange={(e) => thumbnailOnChangeHandler(e)}
              />
              {/* {confirmPasswordError && <div className={classes.error}>{confirmPasswordError}</div>} */}
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



export default withForm(CarCreate, initialFormState)