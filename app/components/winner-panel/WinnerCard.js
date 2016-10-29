import React from 'react';

import Card from '../Card';

const WinnerCard = (props) => {
  if (props.isWinner) {
    return (
      <Card
        key={props.card._id}
        data={props.card}
        col="col-xs-12"
      />
    );
  }

  return false;
};

WinnerCard.propTypes = {
  card: React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
  }),
  isWinner: React.PropTypes.bool.isRequired,
};

export default WinnerCard;
