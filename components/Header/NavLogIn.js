import Link from 'next/link';


const NavLogiIn = ({ setlogIn }) => {
    const handleLogoutClick = () => {
        setlogIn(false);
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
                <Link href="/">
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
                <a onClick={handleLogoutClick}>Cerrar sesión</a>
            </li>
        </ul>
      </div>
  </nav>
)};

export default NavLogiIn;