import React from 'react';

import Loader from '../shared/Loader';

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.timer && this.props.isRunning) {
      return (
        <button className="btn btn-danger">{this.props.timer}</button>
      );
    } else if (!this.props.isRunning) {
      return false;
    } else {
      return <Loader />;
    }
  }
};

Timer.propTypes = {
  timer: React.PropTypes.number,
  isRunning: React.PropTypes.bool,
};

export default Timer;
