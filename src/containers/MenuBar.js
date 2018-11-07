import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
//import WatchIcon from '@material-ui/icons/Watch';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class MenuBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <h2>UserName</h2>
        <h4>MENU</h4>
        <Divider />
        <List>
          <Link to={{pathname:'/home'}}>
            <ListItem button key={'Home'}  >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={{pathname:'/:user/history'}}>
            <ListItem button key={'History'} >
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText primary={'History'} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={{pathname:'/:user/NewGame'}}>
            <ListItem button key={'New Game'} >
              <ListItemIcon><LibraryAddIcon /></ListItemIcon>
              <ListItemText primary={'New Game'} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={{pathname:'/:user/Statistics'}}>
            <ListItem button key={'Statistics'} >
              <ListItemIcon><InsertChartIcon /></ListItemIcon>
              <ListItemText primary={'Statistics'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button key={'Log Out'}>
            <ListItemText primary={'Log Out'} />
          </ListItem>
        </List>
      </div>
    );

//line96 giving warning no nested button - button cannot appear as a descendent of button
    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>

      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
