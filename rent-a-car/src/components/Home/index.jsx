import React from 'react';
import { CssBaseline } from '@material-ui/core';
import axios from 'axios'

import HeroUnit from '../HeroUnit'
import CarList from '../CarList'
import Footer from '../Footer'
import garageService from '../../services/garageService';

const cars = [1, 2, 3]
const cars2 = 
  garageService.get();

export default function Album() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <HeroUnit />
        <CarList cars={cars} />
      </main>
      <Footer />
    </React.Fragment>
  );
}