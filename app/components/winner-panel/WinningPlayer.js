import React from 'react';

import WinnerPanel from './WinnerPanel';
import WinnerCard from './WinnerCard';

class WinningPlayer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <WinnerCard
            card={this.props.winner.card}
            isWinner={this.props.winner.isWinner}
          />
          <WinnerPanel
            winner={this.props.winner}
            firstPlayer={this.props.firstPlayer}
            secondPlayer={this.props.secondPlayer}
            handleNextRound={this.props.handleNextRound}
            handleNewGame={this.props.handleNewGame}
            winningScore={this.props.winningScore}
          />
        </div>
      </div>
    );
  }
}

WinningPlayer.propTypes = {
  firstPlayer: React.PropTypes.object.isRequired,
  secondPlayer: React.PropTypes.object.isRequired,
  winner: React.PropTypes.shape({
    card: React.PropTypes.object,
    isWinner: React.PropTypes.bool.isRequired,
  }),
  handleNextRound: React.PropTypes.func.isRequired,
  handleNewGame: React.PropTypes.func.isRequired,
  winningScore: React.PropTypes.number.isRequired,
};

export default WinningPlayer;
