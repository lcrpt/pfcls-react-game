import React from 'react';
import AppHeader from './AppHeader';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default Layout;
