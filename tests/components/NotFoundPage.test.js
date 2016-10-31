import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import NotFoundPage from '../../app/components/shared/NotFoundPage';

describe('<NotFoundPage /> Component', () => {
  it('Should render', () => {
    const item = renderIntoDocument(
      <NotFoundPage />
    );

    expect(item).toExist();
  });
});
