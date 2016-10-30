const config = {
  defaultState: {
    status: 'setup',
    game: {
      isRunning: false,
      round: 1,
      timer: 0,
      roundInterval: 3,
      winningScore: 3,
    },
    firstPlayer: {
      name: 'Sheldon',
      score: 0,
      selectedCard: '',
    },
    secondPlayer: {
      name: 'Leonard',
      score: 0,
      selectedCard: '',
    },
    winner: {
      isWinner: false,
      winner: {
        name: '',
        score: 0,
        selectedCard: '',
      },
      card: {
        _id: '',
        name: '',
        slug: '',
        winningCards: [],
        icon: '',
        color: '',
      },
    },
  },
  availableRound: [1, 2, 3],
};

export default config;
