import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import WinningPlayer from '../../app/components/winner-panel/WinningPlayer';
import config from '../../app/config/app-config';
import App from '../../app/components/App';

describe('<WinningPlayer /> Component', () => {
  it('Should render', () => {
    const AppComponent = renderIntoDocument(<App />);

    const item = renderIntoDocument(
      <WinningPlayer
        winner={config.defaultState.winner}
        firstPlayer={config.defaultState.firstPlayer}
        secondPlayer={config.defaultState.secondPlayer}
        handleNextRound={AppComponent.handleNextRound}
        handleNewGame={AppComponent.handleNewGame}
        winningScore={config.defaultState.game.winningScore}
      />
    );

    expect(item).toExist();
  });
});
