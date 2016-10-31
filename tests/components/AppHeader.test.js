import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import AppHeader from '../../app/components/shared/AppHeader';

describe('<AppHeader /> Component', () => {
  it('Should render', () => {
    const item = renderIntoDocument(
      <AppHeader />
    );

    expect(item).toExist();
  });
});
