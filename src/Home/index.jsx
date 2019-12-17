import React from 'react';
import { CssBaseline } from '@material-ui/core';

import HeroUnit from '../HeroUnit'
import CarList from '../CarList'
import Footer from '../Footer'

const cars = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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