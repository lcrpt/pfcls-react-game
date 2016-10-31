import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import Loader from '../../app/components/shared/Loader';

describe('<Loader /> Component', () => {
  it('Should render', () => {
    const item = renderIntoDocument(
      <Loader />
    );

    expect(item).toExist();
  });
});
