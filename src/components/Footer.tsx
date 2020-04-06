import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  root: { background: '#222' },
  action: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        className={classes.action}
        style={{ padding: 0 }}
        icon={<Facebook />}
      />
      <BottomNavigationAction
        className={classes.action}
        style={{ padding: 0 }}
        icon={<Twitter />}
      />
      <BottomNavigationAction
        className={classes.action}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
    </BottomNavigation>
  );
};

export default Footer;
