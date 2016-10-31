import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';
import Card from '../../app/components/cards/Card';
import data from '../../app/data/cards';

describe('<Card /> Component', () => {
  it('Should render', () => {
    const item = renderIntoDocument(
      <Card
        key={data[0]._id}
        data={data[0]}
        isRunning={true}
        timer={3}
        col="col-xs-6"
      />
    );

    expect(item).toExist();
  });
});
