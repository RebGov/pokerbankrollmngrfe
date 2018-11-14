import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


import MenuBar from './MenuBar';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function Header(props) {

  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar>
          <div className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuBar />
          </div>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            ANTE UP POKER BANKROLL SUITE
          </Typography>
          <Link style={{ textDecoration: 'none', color:'white' }} to={{pathname:'/login'} } >
          <Button color="inherit" >Login</Button>
          </Link>
          <Link style={{ textDecoration: 'none', color:'white'}} to={{pathname:'/:user/NewGame'}}>
          <Button color='inherit'><LibraryAddIcon /></Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
