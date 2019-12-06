import Link from 'next/link';
import logo from '../img/logo.svg';

const { loged, logedState } = true;

console.log(logedState);
const Header = () => (
  <header>
  <div className="logo">
  <Link href="/">
    <a><img src={logo}/></a>
  </Link>
  </div>
  <nav>
    <Link href="/about">
      <a className="btn-transparent">Iniciar sesión</a>
    </Link>
    <Link  href="/login">
      <a className="big-cta">Vende tu coche</a>
    </Link>
  </nav>
  </header>
);

export default Header;