import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import WinnerCard from '../../app/components/winner-panel/WinnerCard';
import data from '../../app/data/cards';

describe('<WinnerCard /> Component', () => {
  it('Should render', () => {
    console.log('data[0]', data[0]);
    const item = renderIntoDocument(
      <WinnerCard
        card={data[0]}
        isWinner={true}
      />
    );

    expect(item).toExist();
  });
});
