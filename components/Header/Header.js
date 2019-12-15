import React, { useState, useContext } from 'react';
import Link from 'next/link';
import logo from '../../img/logo.svg';
import NavLogOut from './NavLogOut';
import NavLogIn from './NavLogIn';
import { connect } from 'react-redux';

const Header = ({ authUser }) => {
  return (
    <header>
    <div className="logo">
    <Link href="/">
      <a><img src={logo}/></a>
    </Link>
    </div>
    {authUser ? <NavLogIn /> : <NavLogOut />}
    </header>
  );
}
const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Header);