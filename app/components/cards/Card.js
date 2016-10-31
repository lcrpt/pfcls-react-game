import React from 'react';

import Loader from '../shared/Loader';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.setState({ ready: false });
  }

  handleClick(event) {
    event.preventDefault();

    if (this.props.handler && this.props.isRunning && this.props.timer) {
      this.props.handler({
        card: this.props.data,
      });
    }
  }

  render() {
    const cardIcon = {
      width: '80px',
      lineHeight: '80px',
      height: '80px',
    };
    const cardTitle = {
      marginTop: '10px',
      cursor: 'pointer',
    };

    if (this.state.ready) {
      return (
        <div className={this.props.col}>
          <div className="card card-pricing">
            <div className={`content content-${this.props.data.color}`} onClick={this.handleClick}>
              <div className="icon">
                <i className="material-icons" style={cardIcon}>{this.props.data.icon}</i>
              </div>
              <h3 className="card-title" style={cardTitle}>{this.props.data.name}</h3>
            </div>
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

Card.propTypes = {
  data: React.PropTypes.shape({
    color: React.PropTypes.string,
    icon: React.PropTypes.string,
    name: React.PropTypes.string,
  }),
  col: React.PropTypes.string,
  isRunning: React.PropTypes.bool,
  timer: React.PropTypes.number,
  handler: React.PropTypes.func,
};

export default Card;
