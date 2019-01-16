import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Search from '../Search/Search';
import MenuButton from '../MenuButton/MenuButton';
import Grow from '../Grow/Grow';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as actions from '../../store/actions';
import { withRouter } from 'react-router-dom';

const muiStyles = theme => ({
  container: {
    width: '100%',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class MenuBar extends Component {
  onSearchHandler = term => {
    const { showSearchRequested, history } = this.props;
    // this.props.showSearchRequested(term);
    showSearchRequested(term);
    history.push('/page-show');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AppBar position="static">
          <Toolbar>
            <MenuButton />
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              TV SHOWS
            </Typography>
            <Grow />
            <Search onSearch={this.onSearchHandler} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// MenuBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapDispatchToProps = dispatch => ({
  showSearchRequested: term => dispatch(actions.showSearchRequested(term)),
});

// const { showSearchRequested } = actions;

// const mapDispatchToProps = dispatch => ({
//   showSearchRequested(term) {
//     dispatch(actions.showSearchRequested(term));
//   }
// });

// const mapDispatchToProps = dispatch => ({
//   showSearchRequested: term => dispatch(actions.showSearchRequested(term))
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     showSearchRequested: term => dispatch(actions.showSearchRequested(term))
//   };
// };

export default compose(
  withStyles(muiStyles),
  withRouter,
  connect(
    null,
    // { showSearchRequested }
    mapDispatchToProps
  )
)(MenuBar);
