import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid
} from '@material-ui/core';
import axios from 'axios'

import CarCard from '../CarCard'
import garageService from '../../services/garageService'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));



function CarList(props) {
  const classes = useStyles();
  const [cars, setCars] = useState([])
  garageService.get().then(data => {
    setCars(data);
  });
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cars.map(car => (
          <CarCard key={car._id} car={car} />
        ))}
      </Grid>
    </Container>
  );
}

export default (CarList);