import React from 'react';

import Loader from '../shared/Loader';

const Timer = (props) => {
  if (props.timer && props.isRunning) {
    return (
      <button className="btn btn-danger">{props.timer}</button>
    );
  } else if (!props.isRunning) {
    return false;
  } else {
    return <Loader />;
  }
};

Timer.propTypes = {
  timer: React.PropTypes.number,
  isRunning: React.PropTypes.bool,
};

export default Timer;
