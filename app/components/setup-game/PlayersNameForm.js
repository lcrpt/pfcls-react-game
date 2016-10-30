import React from 'react';

import Loader from '../shared/Loader';

class PlayersNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.setState({ ready: false });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handler({
      firstPlayerName: this.refs.firstPlayerName.value,
      secondPlayerName: this.refs.secondPlayerName.value,
    });
  }

  render() {
    if (this.state.ready) {
      return (
        <form onSubmit={this.handleSubmit} noValidate={this.state.ready}>
          <div className="form-group label-floating">
            <label className="control-label">First player Gamer Tag</label>
            <input
              type="text"
              className="form-control"
              required
              ref="firstPlayerName"
              defaultValue={this.props.firstPlayer.name}
            />
          </div>
          <div className="form-group label-floating">
            <label className="control-label">Second player Gamer Tag</label>
            <input
              type="text"
              className="form-control"
              required
              ref="secondPlayerName"
              defaultValue={this.props.secondPlayer.name}
            />
          </div>
          <div className="submit text-center">
            <input
              type="submit"
              className="btn btn-danger btn-raised btn-round"
              value="Play"
            />
          </div>
          <br />
        </form>
      );
    } else {
      return <Loader />;
    }
  }
}

PlayersNameForm.propTypes = {
  handler: React.PropTypes.func.isRequired,
  firstPlayer: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }),
  secondPlayer: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }),
};

export default PlayersNameForm;
