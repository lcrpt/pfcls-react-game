import React from 'react';
import AppHeader from './shared/AppHeader';
import Loader from './shared/Loader';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentWillMount() {
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.setState({ ready: false });
  }

  render() {
    if (this.state.ready) {
      return (
        <div>
          <AppHeader />
          {this.props.children}
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default Layout;
