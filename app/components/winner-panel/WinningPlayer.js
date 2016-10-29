import React from 'react';

import WinnerPanel from './WinnerPanel';
import WinnerCard from './WinnerCard';

class WinningPlayer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <WinnerCard
            isWinner={this.props.winner.isWinner}
            card={this.props.card}
          />
          <WinnerPanel
            winner={this.props.winner}
            firstPlayer={this.props.firstPlayer}
            secondPlayer={this.props.secondPlayer}
          />
        </div>
      </div>
    );
  }
}

WinningPlayer.propTypes = {
  card: React.PropTypes.object,
  firstPlayer: React.PropTypes.object.isRequired,
  secondPlayer: React.PropTypes.object.isRequired,
  winner: React.PropTypes.object.isRequired,
};

export default WinningPlayer;
