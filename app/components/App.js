import React from 'react';
import { isNumber, includes } from 'lodash';

import Cards from './Cards';
import SetUpGameRules from './setup-game/SetUpGameRules';
import WinningPlayer from './WinningPlayer';
import GameInfosBar from './GameInfosBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'setup',
      game: {
        isRunning: false,
        round: 1,
        timer: 0,
        roundInterval: 3,
        winningScore: 3,
        roundTimer: 3,
      },
      firstPlayer: {
        name: 'Sheldon',
        score: 0,
        selectedCard: '',
      },
      secondPlayer: {
        name: 'Leonard',
        score: 0,
        selectedCard: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectCard = this.handleSelectCard.bind(this);
    this.getCurrentPlayer = this.getCurrentPlayer.bind(this);
    this.updateRound = this.updateRound.bind(this);
    this.timer = this.timer.bind(this);
  }

  handleSubmit(players) {
    this.setState({
      status: 'playing',
      firstPlayer: {
        name: players.firstPlayerName,
        score: 0,
      },
      secondPlayer: {
        name: players.secondPlayerName,
        score: 0,
      },
    }, () => {
      this.updateRound(this.state.game.round);
    });
  }

  getCurrentPlayer() {
    let player = '';

    switch (this.state.game.round) {
      case 2:
        player = 'firstPlayer';
        break;
      case 3:
        player = 'secondPlayer';
        break;
      default:
        player = 'null';
    }

    return player;
  }

  handleSelectCard(card) {
    const player = this.getCurrentPlayer();

    this.setState({
      [player]: {
        name: this.state[player].name,
        score: this.state[player].score,
        selectedCard: card.card.slug,
      },
    }, () => {
      console.log('this.state[player]', this.state[player]);
    });
  }

  updateRound(round) {
    const availableRound = [1, 2];

    if (isNumber(round) && includes(availableRound, round)) {
      this.setState({
        game: {
          round: round += 1,
          isRunning: true,
          roundInterval: this.state.game.roundInterval,
        },
      }, () => {
        this.timer();
      });
    } else {
      this.setState({
        game: {
          isRunning: false,
        },
      }, () => {
        this.setState({ status: 'winner' });
      });
    }
  }

  timer() {
    if (this.state.game.isRunning && this.state.game.roundInterval) {
      let seconds;
      let roundInterval = this.state.game.roundInterval;

      const timer = setInterval(() => {
        seconds = parseInt(roundInterval % 60, 10);
        this.setState({
          game: {
            timer: seconds,
            round: this.state.game.round,
            roundInterval: this.state.game.roundInterval,
          },
        });

        if (--roundInterval < 0) {
          this.setState({
            game: {
              isRunning: false,
              timer: 0,
              round: this.state.game.round,
              roundInterval: this.state.game.roundInterval,
            },
          }, () => {
            clearInterval(timer);
            this.updateRound(this.state.game.round);
          });
        }
      }, 1000);
    }
  }


  render() {
    switch (this.state.status) {
      case 'setup':
        return (
          <SetUpGameRules
            handler={this.handleSubmit}
            firstPlayer={this.state.firstPlayer}
            secondPlayer={this.state.secondPlayer}
          />
        );
        break;
      case 'playing':
        return (
          <div>
            <GameInfosBar
              firstPlayer={this.state.firstPlayer}
              secondPlayer={this.state.secondPlayer}
              game={this.state.game}
            />
            <Cards
              handler={this.handleSelectCard}
            />
          </div>
        );
        break;
      case 'winner':
        return (
          <div>
            <WinningPlayer />
          </div>
        );
        break;
      default:
        return (
          <SetUpGameRules
            handler={this.handleSubmit}
            firstPlayer={this.state.firstPlayer}
            secondPlayer={this.state.secondPlayer}
          />
        );
    }
  }
}

export default App;
