import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  car: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function CarCard(props) {
  const classes = useStyles();
  const { car } = props;
  return (
    <Grid item key={car._id} xs={12} sm={6} md={4}>
      <Card className={classes.car}>
        <CardMedia
          className={classes.cardMedia}
          image={car.thumbnailImageUrl}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2"> {car.manufactuer} {car.model}</Typography>
          <Typography> {car.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary"> View </Button>
          <Button size="small" color="primary">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default (CarCard);