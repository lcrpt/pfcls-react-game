import React from 'react';

const GameInfosBar = (props) => {
  const infobar = {
    padding: 0,
    marginBottom: '10px',
  };

  let firstPlayer;
  let secondPlayer;
  const isPlayingColor = { backgroundColor: '#f44336' };

  if (props.game.round === 2) {
    firstPlayer = isPlayingColor;
  } else if (props.game.round === 3) {
    secondPlayer = isPlayingColor;
  } else {
    firstPlayer = {};
    secondPlayer = {};
  }

  return (
    <footer className="footer-white" style={infobar}>
      <div className="container">
        <div className="row">
          <ul className="pull-left">
            <li>
              <a>
                {props.players.firstPlayer.name}
                &nbsp;
                <span className="badge"  style={firstPlayer}>
                  {props.players.firstPlayer.score}
                </span>
              </a>
            </li>
          </ul>
          <ul className="pull-center">
            <li><button className="btn btn-danger">{props.game.timer}</button></li>
          </ul>
          <ul className="pull-right">
            <li>
              <a>
                {props.players.secondPlayer.name}
                &nbsp;
                <span className="badge" style={secondPlayer}>
                  {props.players.secondPlayer.score}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

GameInfosBar.propTypes = {
  players: React.PropTypes.shape({
    firstPlayer: React.PropTypes.shape({
      name: React.PropTypes.stringisRequired,
      score: React.PropTypes.numberisRequired,
    }),
    secondPlayer: React.PropTypes.shape({
      name: React.PropTypes.stringisRequired,
      score: React.PropTypes.numberisRequired,
    }),
  }),
  game: React.PropTypes.shape({
    timer: React.PropTypes.number,
    round: React.PropTypes.number,
  }),
};

export default GameInfosBar;
