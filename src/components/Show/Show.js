import React, { Component } from 'react';
import styles from './Show.module.scss';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const ELEVATION_MOUSE_OVER = 6;
const ELEVATION_MOUSE_OUT = 2;
const { title, imageStyle } = styles;

const muiStyles = theme => ({
  root: {
    backgroundColor: '#1e85a5',
    cursor: 'pointer',
    // ...theme.mixins.gutters()
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2
  },
});

class Show extends Component {
  state = {
    elevation: 2,
  };

  mouseOverHandler = () => {
    this.setState({ elevation: ELEVATION_MOUSE_OVER });
  };

  mouseOutHandler = () => {
    this.setState({ elevation: ELEVATION_MOUSE_OUT });
  };

  render() {
    const { show, classes } = this.props;

    const image = show.image ? (
      <img className={imageStyle} src={show.image.medium} alt={show.name} />
    ) : null;

    return (
      <Paper
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
        className={classes.root}
        elevation={this.state.elevation}
      >
        <div className={title}>{show.name}</div>
        {image}
      </Paper>
    );
  }
}

export default withStyles(muiStyles)(Show);
