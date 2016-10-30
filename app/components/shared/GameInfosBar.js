import React from 'react';

import Loader from '../shared/Loader';
import Timer from './Timer';

class GameInfosBar extends React.Component {
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
    let firstPlayer;
    let secondPlayer;
    const isPlayingColor = { backgroundColor: '#f44336' };
    const infobar = {
      padding: 0,
      marginBottom: '10px',
    };

    if (this.props.game.round === 2) {
      firstPlayer = isPlayingColor;
    } else if (this.props.game.round === 3) {
      secondPlayer = isPlayingColor;
    } else {
      firstPlayer = {};
      secondPlayer = {};
    }

    if (this.state.ready) {
      return (
        <footer className="footer-white" style={infobar}>
          <div className="container">
            <div className="row">
              <ul className="pull-left">
                <li>
                  <a>
                    {this.props.firstPlayer.name}
                    &nbsp;
                    <span className="badge" style={firstPlayer}>
                      {this.props.firstPlayer.score}
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="pull-center">
                <li>
                  <Timer
                    timer={this.props.game.timer}
                    isRunning={this.props.game.isRunning}
                  />
                </li>
              </ul>
              <ul className="pull-right">
                <li>
                  <a>
                    {this.props.secondPlayer.name}
                    &nbsp;
                    <span className="badge" style={secondPlayer}>
                      {this.props.secondPlayer.score}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      );
    } else {
      return <Loader />;
    }
  }
}

GameInfosBar.propTypes = {
  firstPlayer: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  }),
  secondPlayer: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  }),
  game: React.PropTypes.shape({
    timer: React.PropTypes.number,
    round: React.PropTypes.number,
    isRunning: React.PropTypes.bool,
  }),
};

GameInfosBar.defaultProps = {
  game: React.PropTypes.shape({
    timer: 0,
  }),
};

export default GameInfosBar;
