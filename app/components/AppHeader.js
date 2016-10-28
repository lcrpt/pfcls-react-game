import React from 'react';

class AppHeader extends React.Component {
  render() {
    const overideNavBar = {
      marginBottom: 0,
    };

    return (
      <nav className="navbar navbar-inverse navbar-absolute" style={overideNavBar}>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">PFCLS</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppHeader;
