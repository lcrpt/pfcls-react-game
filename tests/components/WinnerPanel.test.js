import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import WinnerPanel from '../../app/components/winner-panel/WinnerPanel';
import config from '../../app/config/app-config';
import App from '../../app/components/App';

describe('<WinnerPanel /> Component', () => {
  it('Should render', () => {
    const AppComponent = renderIntoDocument(<App />);

    const item = renderIntoDocument(
      <WinnerPanel
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
