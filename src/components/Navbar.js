import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar id="header" position="fixed" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Diego Martinez
          </Typography>
          <Typography>
            About
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
