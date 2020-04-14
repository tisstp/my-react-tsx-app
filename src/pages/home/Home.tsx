import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typed from 'react-typed';
import avatar from '../../assets/images/avatar.png';
import Navbar from '../../components/Navbar/Navbar';
import { StoreState } from '../../store/entities';

// CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));

const Home = (props: any) => {
  const classes = useStyles();
  const { title, subtitle } = props;

  return (
    <>
      <Navbar />
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt={title} />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={[title]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={subtitle}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </>
  );
};

// todo check value
const mapStateToProps = (state: StoreState, ownProps: any) => {
  console.log('mapStateToProps', state, ownProps);
  return {
    ...state.home
  }
};

export default connect(mapStateToProps)(Home);
