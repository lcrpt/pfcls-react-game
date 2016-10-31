import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import Timer from '../../app/components/shared/Timer';
import config from '../../app/config/app-config';

describe('<Timer /> Component', () => {
  it('Should render', () => {
    const item = renderIntoDocument(
      <Timer
        timer={config.defaultState.game.timer}
        isRunning={config.defaultState.game.isRunning}
      />
    );

    expect(item).toExist();
  });
});
