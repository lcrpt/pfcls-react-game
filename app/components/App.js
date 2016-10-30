import React from 'react';
import { isNumber, includes, find, isUndefined } from 'lodash';

import data from '../data/cards';

import Cards from './Cards';
import SetUpGameRules from './setup-game/SetUpGameRules';
import WinningPlayer from './winner-panel/WinningPlayer';
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
      winner: {
        isWinner: false,
        winner: {
          name: '',
          score: 0,
          selectedCard: '',
        },
        card: {
          _id: '',
          name: '',
          slug: '',
          winningCards: [],
          icon: '',
          color: '',
        },
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectCard = this.handleSelectCard.bind(this);
    this.getCurrentPlayer = this.getCurrentPlayer.bind(this);
    this.updateRound = this.updateRound.bind(this);
    this.timer = this.timer.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.setNoWinner = this.setNoWinner.bind(this);
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

  setWinner({ player, card }) {
    this.setState({
      [player]: {
        name: this.state[player].name,
        score: this.state[player].score += 1,
        selectedCard: '',
      },
    }, () => {
      this.setState({
        winner: {
          isWinner: true,
          winner: this.state[player],
          card,
        },
      }, () => {
        this.setState({ status: 'winner' });
      });
    });
  }

  setNoWinner() {
    this.setState({
      winner: {
        isWinner: false,
      },
    }, () => {
      this.setState({ status: 'winner' });
    });
  }

  getWinner() {
    const firstPlayerCardSlug = this.state.firstPlayer.selectedCard;
    const secondPlayerCardSlug = this.state.secondPlayer.selectedCard;
    const firstPlayerCard = find(data, { slug: firstPlayerCardSlug });
    const secondPlayerCard = find(data, { slug: secondPlayerCardSlug });

    if (
      !isUndefined(firstPlayerCard) &&
      !isUndefined(firstPlayerCard.winningCards) &&
      includes(firstPlayerCard.winningCards, secondPlayerCardSlug)
    ) {
      this.setWinner({ player: 'firstPlayer', card: firstPlayerCard });
    } else if (
      !isUndefined(secondPlayerCard) &&
      !isUndefined(secondPlayerCard.winningCards) &&
      includes(secondPlayerCard.winningCards, firstPlayerCardSlug)
    ) {
      this.setWinner({ player: 'secondPlayer', card: secondPlayerCard });
    } else if (firstPlayerCardSlug && isUndefined(secondPlayerCardSlug)) {
      this.setWinner({ player: 'firstPlayer', card: firstPlayerCard });
    } else if (secondPlayerCardSlug && isUndefined(firstPlayerCardSlug)) {
      this.setWinner({ player: 'secondPlayer', card: secondPlayerCard });
    } else {
      this.setNoWinner();
    }
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
        this.getWinner();
      });
    }
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
      this.updateRound(this.state.game.round);
    });
  }

  timer() {
    if (this.state.game.isRunning && this.state.game.roundInterval) {
      const round = this.state.game.round;
      let seconds;
      let roundInterval = this.state.game.roundInterval;

      const timer = setInterval(() => {
        seconds = parseInt(roundInterval % 60, 10);

        if (this.state.game.round === round) {
          this.setState({
            game: {
              timer: seconds,
              round: this.state.game.round,
              roundInterval: this.state.game.roundInterval,
            },
          });
        } else {
          clearInterval(timer);
        }

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
            <GameInfosBar
              firstPlayer={this.state.firstPlayer}
              secondPlayer={this.state.secondPlayer}
              game={this.state.game}
            />
            <WinningPlayer
              winner={this.state.winner}
              firstPlayer={this.state.firstPlayer}
              secondPlayer={this.state.secondPlayer}
            />
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
