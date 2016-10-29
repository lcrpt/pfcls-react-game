import React from 'react';

import PlayersNameForm from './PlayersNameForm';

class SetUpGameRules extends React.Component {
  render() {
    const background = {
      backgroundImage: 'url("https://static.pexels.com/photos/498/playing-sony-console-controller.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      marginTop: '-50px',
    };
    const fixContainer = {
      paddingTop: '0',
      width: 'auto',
    };

    return (
      <div className="page-header header-filter" style={background}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
              <div className="card card-signup">
                <div className="header header-danger text-center">
                  <h4 className="card-title">Game Set Up</h4>
                </div>
                <br />
                <div className="contact-content">
                  <div className="container" style={fixContainer}>
                    <PlayersNameForm
                      handler={this.props.handler}
                      firstPlayer={this.props.firstPlayer}
                      secondPlayer={this.props.secondPlayer}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SetUpGameRules.propTypes = {
  handler: React.PropTypes.func.isRequired,
  firstPlayer: React.PropTypes.object.isRequired,
  secondPlayer: React.PropTypes.object.isRequired,
};

export default SetUpGameRules;
