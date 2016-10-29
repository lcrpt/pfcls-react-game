import React from 'react';

class WinnerPanel extends React.Component {
  render() {
    if (this.props.winner.isWinner) {
      return (
        <div className="col-xs-12">
          <div className="card card-pricing">
            <div className="content content-primary">
              <h3 className="card-title">The winner is {this.props.winner.winner.name}</h3>
              <h3 className="card-title">Score:</h3>
              <ul>
                <li>{this.props.firstPlayer.name} <b>{this.props.firstPlayer.score}</b></li>
                <li>{this.props.secondPlayer.name} <b>{this.props.secondPlayer.score}</b></li>
              </ul>
              <a href="#" className="btn btn-white btn-round">Next round</a>
              <br /><br />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-xs-12">
          <div className="card card-pricing">
            <div className="content content-primary">
              <h3 className="card-title">Nobody won this Round</h3>
              <h3 className="card-title">Score:</h3>
              <ul>
                <li>{this.props.firstPlayer.name} <b>{this.props.firstPlayer.score}</b></li>
                <li>{this.props.secondPlayer.name} <b>{this.props.secondPlayer.score}</b></li>
              </ul>
              <a href="#" className="btn btn-white btn-round">Next round</a>
              <br /><br />
            </div>
          </div>
        </div>
      );
    }
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
    isWinner: React.PropTypes.bool.isRequired,
  }),
};


export default WinnerPanel;
