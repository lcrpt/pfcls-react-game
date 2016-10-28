import React from 'react';
import Cards from './Cards';
import SetUpGameRules from './setup-game/SetUpGameRules';
import WinningPlayer from './WinningPlayer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'init',
      game: {
        tourInterval: 3,
        winningScore: 3,
      },
      players: {
        firstPlayer: {
          name: 'Sheldon',
          score: 0,
        },
        secondPlayer: {
          name: 'Leonard',
          score: 0,
        },
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(players) {
    this.setState({
      players: {
        firstPlayer: {
          name: players.firstPlayerName,
        },
        secondPlayer: {
          name: players.secondPlayerName,
        },
      },
    });
  }

  render() {
    console.log('this.state', this.state);
    switch (this.state.status) {
      case 'init':
        return <SetUpGameRules handler={this.handleSubmit} players={this.state.players} />;
        break;
      case 'playing':
        return <Cards />;
        break;
      case 'winner':
        return <WinningPlayer />;
        break;
      default:
        return <SetUpGameRules handler={this.handleSubmit} players={this.state.players} />;
    }
  }
};

export default App;
