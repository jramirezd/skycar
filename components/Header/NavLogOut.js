import Link from 'next/link';


const NavLogOut = () => {
    return(
  <nav>
    <Link href="/signin">
      <a className="btn-transparent">Iniciar sesión</a>
    </Link>
    <Link  href="/login">
      <a className="big-cta">Vende tu coche</a>
    </Link>
  </nav>
);
}

export default NavLogOut;