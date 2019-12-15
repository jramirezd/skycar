import Link from 'next/link';
import { Router } from 'next/router'
import { logout } from '../../services/auth';

const NavLogiIn = () => {
    const handleLogout = () => {
        logout();
        Router.push('/');
      }
    
    return(
  <nav>
      <div className="menu-box">
        <input type="checkbox" />  
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
            <li>
                <Link href="/account">
                    <a>Mi cuenta</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Mi anuncio</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Favoritos</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Request</a>
                </Link>
            </li>
            <li>
                <a onClick={handleLogout}>Cerrar sesión</a>
            </li>
        </ul>
      </div>
  </nav>
)};

export default NavLogiIn;