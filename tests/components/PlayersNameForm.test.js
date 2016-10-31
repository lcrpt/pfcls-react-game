import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import PlayersNameForm from '../../app/components/setup-game/PlayersNameForm';
import App from '../../app/components/App';
import config from '../../app/config/app-config';

describe('<PlayersNameForm /> Component', () => {
  it('Should render', () => {
    const AppComponent = renderIntoDocument(<App />);

    const item = renderIntoDocument(
      <PlayersNameForm
        handler={AppComponent.handleSubmit}
        firstPlayer={config.defaultState.firstPlayer}
        secondPlayer={config.defaultState.secondPlayer}
      />
    );

    expect(item).toExist();
  });
});
