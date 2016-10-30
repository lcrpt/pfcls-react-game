import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    if (this.props.handler) {
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
  }
}

Card.propTypes = {
  data: React.PropTypes.shape({
    color: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  }),
  col: React.PropTypes.string.isRequired,
  handler: React.PropTypes.func,
};

export default Card;
