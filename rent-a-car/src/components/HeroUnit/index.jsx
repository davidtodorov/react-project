import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Button
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: 'url(http://localhost:3000/rentcar1.jpg)',
    padding: theme.spacing(8, 0, 6),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '25rem',
    color: 'white'
  },
  heroText: {
    color: 'white !important',
    textShadow: '2px 2px 5px rgba(54, 125, 255, 1)'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

}));

function HeroUnit() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <div className={classes.heroText}>
        <Container maxWidth="sm">
          <Typography className={classes.heroText} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Rent a car
            </Typography>
          <Typography className={classes.heroText} variant="h5" align="center" color="textSecondary" paragraph>
            Best cars at the best prices!
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Call us now!
                  </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default (HeroUnit);