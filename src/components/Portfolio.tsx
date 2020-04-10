import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import project1 from '../assets/images/html-css-javascript-lg.jpg';
import project2 from '../assets/images/javascript-fullstack.jpg';
import project3 from '../assets/images/react-redux.jpg';
import project4 from '../assets/images/mern-stack.jpg';

const useStyles = makeStyles({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sit accusantium eveniet quo aperiam amet. Voluptatibus
                  sunt placeat fugiat accusamus deserunt maiores libero rem
                  voluptates beatae, iusto voluptatum magnam itaque.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sit accusantium eveniet quo aperiam amet. Voluptatibus
                  sunt placeat fugiat accusamus deserunt maiores libero rem
                  voluptates beatae, iusto voluptatum magnam itaque.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sit accusantium eveniet quo aperiam amet. Voluptatibus
                  sunt placeat fugiat accusamus deserunt maiores libero rem
                  voluptates beatae, iusto voluptatum magnam itaque.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sit accusantium eveniet quo aperiam amet. Voluptatibus
                  sunt placeat fugiat accusamus deserunt maiores libero rem
                  voluptates beatae, iusto voluptatum magnam itaque.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
