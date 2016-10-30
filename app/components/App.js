/* eslint no-unreachable: "error" */

import React from 'react';
import { isNumber, includes, find, isUndefined } from 'lodash';

import data from '../data/cards';
import config from '../config/app-config';

import Cards from './cards/Cards';
import SetUpGameRules from './setup-game/SetUpGameRules';
import WinningPlayer from './winner-panel/WinningPlayer';
import GameInfosBar from './shared/GameInfosBar';
import Loader from './shared/Loader';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      status: config.defaultState.status,
      game: config.defaultState.game,
      firstPlayer: config.defaultState.firstPlayer,
      secondPlayer: config.defaultState.secondPlayer,
      winner: config.defaultState.winner,
    };

    this.defaultGameState = config.defaultState.game;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectCard = this.handleSelectCard.bind(this);
    this.getCurrentPlayer = this.getCurrentPlayer.bind(this);
    this.updateRound = this.updateRound.bind(this);
    this.timer = this.timer.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.setNoWinner = this.setNoWinner.bind(this);
    this.handleNextRound = this.handleNextRound.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  componentWillMount() {
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.setState({ ready: false });
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
    const setWinningPlayerState = {
      [player]: {
        name: this.state[player].name,
        score: this.state[player].score += 1,
        selectedCard: '',
      },
    };
    const setWinnerState = {
      winner: {
        isWinner: true,
        winner: this.state[player],
        card,
      },
    };

    this.setState(setWinningPlayerState, () => {
      this.setState(setWinnerState, () => {
        this.setState({ status: 'winner' });
      });
    });
  }

  setNoWinner() {
    const setNoWinnerState = {
      winner: {
        isWinner: false,
      },
    };

    this.setState(setNoWinnerState, () => {
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
    } else if (!secondPlayerCardSlug && firstPlayerCardSlug) {
      this.setWinner({ player: 'firstPlayer', card: firstPlayerCard });
    } else if (!firstPlayerCardSlug && secondPlayerCardSlug) {
      this.setWinner({ player: 'secondPlayer', card: secondPlayerCard });
    } else {
      this.setNoWinner();
    }
  }

  updateRound(round) {
    const availableRound = config.availableRound;
    const setUpdateRoundState = {
      game: {
        round: round += 1,
        isRunning: true,
        roundInterval: this.state.game.roundInterval,
        winningScore: this.state.game.winningScore,
      },
    };
    const setFinshRoundState = {
      game: {
        isRunning: false,
        winningScore: this.state.game.winningScore,
      },
    };

    if (isNumber(round) && includes(availableRound, round)) {
      this.setState(setUpdateRoundState, () => {
        this.timer();
      });
    } else {
      this.setState(setFinshRoundState, () => {
        this.getWinner();
      });
    }
  }

  timer() {
    if (this.state.game.isRunning && this.state.game.roundInterval) {
      const round = this.state.game.round;
      let seconds;
      let roundInterval = this.state.game.roundInterval;

      const timer = setInterval(() => {
        seconds = parseInt(roundInterval % 60, 10);

        if (this.state.game.round === round) {
          const setTimerState = {
            game: {
              timer: seconds,
              isRunning: true,
              round: this.state.game.round,
              roundInterval: this.state.game.roundInterval,
              winningScore: this.state.game.winningScore,
            },
          };

          this.setState(setTimerState);
        } else {
          clearInterval(timer);
        }

        if (--roundInterval < 0) {
          const setFinishTimerState = {
            game: {
              isRunning: false,
              timer: 0,
              round: this.state.game.round,
              roundInterval: this.state.game.roundInterval,
              winningScore: this.state.game.winningScore,
            },
          };

          this.setState(setFinishTimerState, () => {
            clearInterval(timer);
            this.updateRound(this.state.game.round);
          });
        }
      }, 1000);
    }
  }

  handleNextRound() {
    const setNextRoundState = {
      status: 'playing',
      game: this.defaultGameState,
      firstPlayer: {
        name: this.state.firstPlayer.name,
        score: this.state.firstPlayer.score,
        selectedCard: '',
      },
      secondPlayer: {
        name: this.state.secondPlayer.name,
        score: this.state.secondPlayer.score,
        selectedCard: '',
      },
    };

    this.setState(setNextRoundState, () => {
      this.updateRound(this.state.game.round);
    });
  }

  handleNewGame() {
    const setNewGameState = {
      status: 'playing',
      game: this.defaultGameState,
      firstPlayer: {
        name: this.state.firstPlayer.name,
        score: 0,
        selectedCard: '',
      },
      secondPlayer: {
        name: this.state.secondPlayer.name,
        score: 0,
        selectedCard: '',
      },
    };

    this.setState(setNewGameState, () => {
      this.updateRound(this.state.game.round);
    });
  }

  handleSelectCard(card) {
    const player = this.getCurrentPlayer();
    const setHandleSelectCardState = {
      [player]: {
        name: this.state[player].name,
        score: this.state[player].score,
        selectedCard: card.card.slug,
      },
    };

    this.setState(setHandleSelectCardState, () => {
      this.updateRound(this.state.game.round);
    });
  }

  handleSubmit(players) {
    const setHandleSubmitState = {
      status: 'playing',
      firstPlayer: {
        name: players.firstPlayerName,
        score: 0,
      },
      secondPlayer: {
        name: players.secondPlayerName,
        score: 0,
      },
    };

    this.setState(setHandleSubmitState, () => {
      this.updateRound(this.state.game.round);
    });
  }

  render() {
    if (this.state.ready) {
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
                handler={this.handleClickNextRound}
                handleNextRound={this.handleNextRound}
                handleNewGame={this.handleNewGame}
                winningScore={this.state.game.winningScore}
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
    } else {
      return <Loader />;
    }
  }
}

export default App;
