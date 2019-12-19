import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid
} from '@material-ui/core';

import CarCard from '../CarCard'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

function CarList(props) {
  const classes = useStyles();
  const { cars } = props;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cars.map(car => (
          <CarCard key={car} car={car} />
        ))}
      </Grid>
    </Container>
  );
}

export default (CarList);