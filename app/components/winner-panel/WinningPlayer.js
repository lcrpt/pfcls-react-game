import React from 'react';

import WinnerPanel from './WinnerPanel';
import WinnerCard from './WinnerCard';
import Loader from '../shared/Loader';

class WinningPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentWillMount() {
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.setState({ ready: false });
  }

  render() {
    if (this.state.ready) {
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
    } else {
      return <Loader />;
    }
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
