import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import data from '../../app/data/cards';
import Cards from '../../app/components/cards/Cards';
import App from '../../app/components/App';


describe('<Cards /> Component', () => {
  it('Should render', () => {
    const AppComponent = renderIntoDocument(<App />);

    const item = renderIntoDocument(
      <Cards
        isRunning={true}
        timer={3}
        handler={AppComponent.handleSelectCard}
      />
    );

    expect(item).toExist();
  });
});
