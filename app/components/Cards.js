import React from 'react';
import Card from './Card';
import data from '../data/cards';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = { data };
  }

  render() {
    const cards = this.state.data.map(item => {
      return <Card key={item._id} data={item} col='col-xs-6' />
    });

    return (
      <div className="row">
        {cards}
      </div>
    );
  }
}

export default Cards;
