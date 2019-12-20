import React from 'react';
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore } from 'redux';
import makeStore from '../reducers';

// const initStore = () => {
//   const store = createStore(makeStore);
//   return store;
// };

class EnhancedApp extends App {
  static async getInitialProps({ Component, ctx }) {

    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    );
  }
}

export default withRedux(makeStore)(EnhancedApp);
