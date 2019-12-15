import React from 'react';
import Router from 'next/router';

import { registerAuthObserver } from '../../services/auth';

const withAuthorization = (needsAuthorization) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      registerAuthObserver(authUser => {
        if (!authUser && needsAuthorization) {
          Router.push('/signin')
        }
      });
    }

    render() {
      return (
        <Component { ...this.props } />
      );
    }
  }

  return WithAuthorization;
}

export default withAuthorization;