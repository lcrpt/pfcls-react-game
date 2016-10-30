import React from 'react';

class WinnerPanel extends React.Component {
  constructor(props) {
    super(props);

    this.isGameOver = this.isGameOver.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  isGameOver() {
    let gameOver = false;
    const firstPlayerScore = this.props.firstPlayer.score;
    const secondPlayerScore = this.props.secondPlayer.score;

    if ((firstPlayerScore || secondPlayerScore) === this.props.winningScore) {
      gameOver = true;
    }

    return gameOver;
  }

  handleClick(event) {
    event.preventDefault();

    if (this.isGameOver()) {
      if (this.props.handleNewGame) {
        this.props.handleNewGame();
      }
    } else {
      if (this.props.handleNextRound) {
        this.props.handleNextRound();
      }
    }
  }

  render() {
    let cardTitle = '';
    let gameOver = '';
    let buttonLabel = '';

    if (this.props.winner.isWinner) {
      cardTitle = `The winner is ${this.props.winner.winner.name}`;
    } else {
      cardTitle = 'Nobody won this Round';
    }

    if (this.isGameOver()) {
      gameOver = <h3 className="card-title">GAME OVER</h3>;
      buttonLabel = 'New Game';
    } else {
      buttonLabel = 'Next Round';
    }

    return (
      <div className="col-xs-12">
        <div className="card card-pricing">
          <div className="content content-primary">
            {gameOver}
            <h3 className="card-title">{cardTitle}</h3>
            <h3 className="card-title">Score</h3>
            <ul>
              <li>{this.props.firstPlayer.name} <b>{this.props.firstPlayer.score}</b></li>
              <li>{this.props.secondPlayer.name} <b>{this.props.secondPlayer.score}</b></li>
            </ul>
            <a href="#" className="btn btn-white btn-round" onClick={this.handleClick}>{buttonLabel}</a>
            <br /><br />
          </div>
        </div>
      </div>
    );
  }
}

WinnerPanel.propTypes = {
  firstPlayer: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  }),
  secondPlayer: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  }),
  winner: React.PropTypes.shape({
    name: React.PropTypes.string,
    winner: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
    isWinner: React.PropTypes.bool.isRequired,
  }),
  handleNextRound: React.PropTypes.func.isRequired,
  handleNewGame: React.PropTypes.func.isRequired,
  winningScore: React.PropTypes.number.isRequired,
};


export default WinnerPanel;
