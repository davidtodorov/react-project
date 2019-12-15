import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Navigation.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function ButtonAppBar() {

  return (
    <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              News
          </Typography>
            <Link to="/login"><Button edge="start" color="inherit">Login</Button></Link>
            <Link to="/register"><Button color="inherit">Register</Button></Link>
          </Toolbar>
        </AppBar>
    </div>
  );
}