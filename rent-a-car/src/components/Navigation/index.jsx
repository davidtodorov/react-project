import React, { useContext, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";
import UserContext from '../../contexts/UserContext'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  AppBar: {
    background: '#2B4570',
  },
  Toolbar: {
    justifyContent: 'space-between',
    padding: '0rem 10rem'
  },
  rightFloated: {
    justifyContent: 'flex-start'
  },
  leftFloated: {
    justifyContent: 'flex-end'
  }
}));

function ButtonAppBar() {
  const classes = useStyles();
  const { user } = useContext(UserContext)

  return (
    <nav className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.Toolbar}>
          <div className={classes.leftFloated}>
            <Link to="/home"><Button edge="start" color="inherit">Home</Button></Link>
          </div>
          <div className={classes.rightFloated}>
            {user !== null ?
              <Fragment>
                <Typography variant="h6" style={{float: 'left', marginRight: '3rem'}}>
                  Welcome, {user.username}
                </Typography>
                <Link to="/logout"><Button edge="start" color="inherit">Logout</Button></Link>
              </Fragment> :
              <Fragment>
                <Link to="/login"><Button edge="start" color="inherit">Login</Button></Link>
                <Link to="/register"><Button color="inherit">Register</Button></Link>
              </Fragment>}
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default withStyles(useStyles)(ButtonAppBar)