import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';

import App from '../../app/components/App';
import data from '../../app/data/cards';

describe('<App /> Component', () => {
  const item = renderIntoDocument(<App />);

  it('Should render', () => {
    expect(item).toExist();
  });

  // const methodExist = ({ name, method }) => {
  //   describe(`Method ${name}`, () => {
  //     it('exist', () => {
  //       expect(method).to.exist;
  //     });
  //   });
  // };
  //
  // methodExist({
  //   name: 'getCurrentPlayer',
  //   method: item.getCurrentPlayer(),
  // });
  //
  // methodExist({
  //   name: 'setWinner',
  //   method: item.setWinner({
  //     player: 'firstPlayer',
  //     card: data[0],
  //   }),
  // });
  //
  // methodExist({
  //   name: 'setNoWinner',
  //   method: item.setNoWinner(),
  // });
  //
  // methodExist({
  //   name: 'getWinner',
  //   method: item.getWinner(),
  // });
  //
  // methodExist({
  //   name: 'updateRound',
  //   method: item.updateRound(1),
  // });
  //
  // methodExist({
  //   name: 'timer',
  //   method: item.timer(),
  // });
  //
  // methodExist({
  //   name: 'handleNextRound',
  //   method: item.handleNextRound(),
  // });
  //
  // methodExist({
  //   name: 'handleNewGame',
  //   method: item.handleNewGame(),
  // });
  //
  // const card = { card: { card: data[0] } };
  //
  // methodExist({
  //   name: 'handleSelectCard',
  //   method: item.handleSelectCard(card),
  // });
  //
  // methodExist({
  //   name: 'handleSubmit',
  //   method: item.handleSubmit({
  //     firstPlayerName: 'Sheldon',
  //     secondPlayerName: 'Leonard',
  //   }),
  // });
});
