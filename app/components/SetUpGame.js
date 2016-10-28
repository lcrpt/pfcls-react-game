import React from 'react';

class SetUpGame extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('handleSubmit ##########################################');
  }

  render() {
    const background = {
      'backgroundImage': 'url("https://static.pexels.com/photos/498/playing-sony-console-controller.jpg")',
      'backgroundSize': 'cover',
      'backgroundPosition': 'top center',
      'marginTop': '-50px',
    };
    const fixContainer = {
      'paddingTop': '0',
      'width': 'auto'
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
                <br/>
                <div className="contact-content">
                  <div className="container" style={fixContainer}>

                      <div className="form-group label-floating">
                        <label className="control-label">First player name</label>
                        <input type="text" name="firstPlayer" className="form-control" required />
                      </div>
                      <div className="form-group label-floating">
                        <label className="control-label">Second player name</label>
                        <input type="text" name="secondPlayer" className="form-control" required />
                      </div>
                      <div className="submit text-center">
                        <button className="btn btn-danger btn-raised btn-round" onClick={this.handleSubmit}>tttt</button>
                      </div>
                      <br/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
//  onSubmit={this.props.handler}

SetUpGame.propTypes = {
  handler: React.PropTypes.func.isRequired,
};

export default SetUpGame;
