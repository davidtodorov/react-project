import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.Toolbar}>
          <div className={classes.leftFloated}>
            <Link to="/"><Button edge="start" color="inherit">Home</Button></Link>
          </div>
          <div className={classes.rightFloated}>
            <Link to="/login"><Button edge="start" color="inherit">Login</Button></Link>
            <Link to="/register"><Button color="inherit">Register</Button></Link>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default withStyles(useStyles)(ButtonAppBar)