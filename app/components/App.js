import React from 'react';
import Cards from './Cards';
import SetUpGame from './SetUpGame';
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
          name: '',
          score: 0,
        },
        secondPlayer: {
          name: '',
          score: 0,
        },
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('event', event.target.value);
    console.log('event', event);
    console.log('totototootototo');


    // this.setState({  }, this.sendFormData);
  }

  render() {
    switch (this.state.status) {
      case 'init':
        return <SetUpGame handler={this.handleSubmit} />;
        break;
      case 'playing':
        return <Cards />;
        break;
      case 'winner':
        return <WinningPlayer />;
        break;
      default:
        return <SetUpGame />;
    }
  }
};

export default App;
