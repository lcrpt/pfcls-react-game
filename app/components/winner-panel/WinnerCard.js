import React from 'react';

import Card from '../cards/Card';

class WinnerCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isWinner) {
      return (
        <Card
          key={this.props.card._id}
          data={this.props.card}
          col="col-xs-12"
        />
      );
    }

    return false;
  }
};

WinnerCard.propTypes = {
  card: React.PropTypes.shape({
    _id: React.PropTypes.string,
  }),
  isWinner: React.PropTypes.bool.isRequired,
};

export default WinnerCard;
