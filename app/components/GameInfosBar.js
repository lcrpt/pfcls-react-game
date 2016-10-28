import React from 'react';

const GameInfosBar = (props) => {
  const infobar = {
    padding: 0,
    marginBottom: '10px',
  };

  return (
    <footer className="footer-white" style={infobar}>
      <div className="container">
        <div className="row">
          <ul className="pull-left">
            <li><a>{props.players.firstPlayer.name} <span className="badge">1</span></a></li>
          </ul>
          <ul className="pull-center">
            <li><button className="btn btn-danger">{props.game.time}</button></li>
          </ul>
          <ul className="pull-right">
            <li><a>{props.players.secondPlayer.name} <span className="badge">2</span></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default GameInfosBar;

GameInfosBar.propTypes = {
  players: React.PropTypes.object,
  game: React.PropTypes.object,
};
