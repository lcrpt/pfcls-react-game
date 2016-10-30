import React from 'react';

import Card from './Card';
import data from '../../data/cards';
import Loader from '../shared/Loader';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, ready: false };
    this.fetchCards = this.fetchCards.bind(this);
  }

  componentWillMount() {
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.setState({ ready: false });
  }

  fetchCards() {
    return this.state.data.map((item) => {
      return (
        <Card
          key={item._id}
          data={item}
          handler={this.props.handler}
          isRunning={this.props.isRunning}
          timer={this.props.timer}
          col="col-xs-6"
        />
      );
    });
  }

  render() {
    if (this.state.ready && this.props.isRunning) {
      return (
        <div className="container">
          <div className="row">
            {this.fetchCards()}
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

Cards.propTypes = {
  isRunning: React.PropTypes.bool,
  timer: React.PropTypes.number,
  handler: React.PropTypes.func,
};

export default Cards;
