import React, { Component } from 'react';
import styles from './ShowList.module.scss';
import withSpinner from '../../hocs/withLoading';
import { connect } from 'react-redux';
import Show from '../Show/Show';

const { container } = styles;

class ShowList extends Component {
  onMouseOverHandler = () => {
    console.log('onMouseOverHandler');
  };

  render() {
    const { shows } = this.props;

    return (
      <div className={container}>
        {shows.map(element => (
          <Show key={element.show.id} show={element.show} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shows: state.showSearch.shows,
    isFetching: state.showSearch.isFetching
  };
};

export default connect(mapStateToProps)(withSpinner(ShowList));
