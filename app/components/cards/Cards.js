import React from 'react';

import Card from './Card';
import data from '../../data/cards';

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data };
  }

  render() {
    const cards = this.state.data.map((item) => {
      return (
        <Card
          key={item._id}
          data={item}
          handler={this.props.handler}
          col="col-xs-6"
        />
      );
    });

    return (
      <div className="container">
        <div className="row">
          {cards}
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  handler: React.PropTypes.func,
};

export default Cards;
