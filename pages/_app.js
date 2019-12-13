import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import UserContext from '../components/UserContext';

export default class MyApp extends App {
    state = {
        user: null
      };
      render() {
        const { Component, pageProps } = this.props;
        return (
            <div className="test">
             <UserContext.Provider value={{ user: this.state.user}}>
                <Component {...pageProps} />
            </UserContext.Provider>
            </div>
        );
      }
}