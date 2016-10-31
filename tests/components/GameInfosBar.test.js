import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import GameInfosBar from '../../app/components/shared/GameInfosBar';
import config from '../../app/config/app-config';

describe('<GameInfosBar /> Component', () => {
  it('Should render', () => {
    const item = renderIntoDocument(
      <GameInfosBar
        firstPlayer={config.defaultState.firstPlayer}
        secondPlayer={config.defaultState.secondPlayer}
        game={config.defaultState.game}
      />
    );

    expect(item).toExist();
  });
});
