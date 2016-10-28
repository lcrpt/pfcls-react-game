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

export default Layout;
