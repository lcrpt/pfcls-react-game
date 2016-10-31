import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import SetUpGameRules from '../../app/components/setup-game/SetUpGameRules';
import config from '../../app/config/app-config';
import App from '../../app/components/App';

describe('<SetUpGameRules /> Component', () => {
  it('Should render', () => {
    const AppComponent = renderIntoDocument(<App />);

    const item = renderIntoDocument(
      <SetUpGameRules
        handler={AppComponent.handleSubmit}
        firstPlayer={config.defaultState.firstPlayer}
        secondPlayer={config.defaultState.secondPlayer}
      />
    );

    expect(item).toExist();
  });
});
