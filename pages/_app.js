import React from 'react';
import App, { Container } from "next/app";
import Router from 'next/router';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import initStore from "../store";

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

export default withRedux(initStore)(EnhancedApp);
