import React, { useState, useContext } from 'react';
import Link from 'next/link';
import logo from '../../img/logo.svg';
import NavLogOut from './NavLogOut';
import NavLogIn from './NavLogIn';
import UserContext from '../UserContext';

const Header = () => {
  const [logIn, setlogIn] = useContext(UserContext);
  console.log(logIn);
  return (
    <header>
    <div className="logo">
    <Link href="/">
      <a><img src={logo}/></a>
    </Link>
    </div>
    {logIn ? <NavLogIn setlogIn={setlogIn} /> : <NavLogOut setlogIn={setlogIn} />}
    </header>
  );
}
export default Header;