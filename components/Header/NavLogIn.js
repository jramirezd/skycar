import Link from 'next/link';
import { auth } from '../../services';

import Router from "next/router";

const handleLogout = () => {
  auth.doSignOut();
  Router.push('/');
}

const NavLogiIn = (user) => {
    const id = user.user;
    return(
  <nav>
      <div className="menu-box">
        <input type="checkbox" />  
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
            <li>
                <Link href={`/account?id=${id}`}>
                    <a>Mi cuenta</a>
                </Link>
            </li>
            <li>
                <Link href={`/editadd?id=${id}`}>
                    <a>Mi anuncio</a>
                </Link>
            </li>
            <li>
                <Link href={`/favorites?id=${id}`}>
                    <a>Favoritos</a>
                </Link>
            </li>
            <li>
                <Link href={`/request?id=${id}`}>
                    <a>Request</a>
                </Link>
            </li>
            <li>
                <a onClick={handleLogout}>Cerrar sesión</a>
            </li>
            <li className="log-cta">
                <Link href={`/newadd?id=${id}`}>
                    <a className="big-cta">Vende tu coche</a>
                </Link>
            </li>       
        </ul>
      </div>
  </nav>
)};

export default NavLogiIn;