import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../../img/logo-white.svg';

const Footer = () => {
  const [logIn, setlogIn] = useState(false);
  console.log('Logeado:', logIn);
  return (
    <footer>
      <div className="center-box">
          <div className="search-box">
              <h4>Buscador abierto de vehículos</h4>
              <p>Sientete libre de buscar</p>
              <div className="input-box">
                <input name="searchbox" defaultValue="test" />
                <input type="submit" className="alternative" />
              </div>
          </div>
          <div className="footer-nav">
          <h3>Coches más buscados</h3>
              <ul>
                <li>
                  <Link href="/">
                      <a>Honda Accord</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Tesla Model 3</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Bmw x3</a>
                  </Link>
                </li>
              </ul>
          </div>
          <div className="footer-nav">
          <h3>Comprar coches</h3>
              <ul>
                <li>
                  <Link href="/">
                      <a>Por menos de 1500€</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Por menos de 2500€</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Por menos de 3500€</a>
                  </Link>
                </li>
              </ul>
          </div>
          <div className="footer-nav">
          <h3>Te ayudamos</h3>
              <ul>
                <li>
                  <Link href="/">
                      <a>Consejos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Vídeos útiles</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Valor de mercado</a>
                  </Link>
                </li>
              </ul>
          </div>
          <div className="footer-nav">
          <h3>About</h3>
              <ul>
                <li>
                  <Link href="/">
                      <a>Aviso legal</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Política de cookies</a>
                  </Link>
                </li>
               
              </ul>
          </div>
      </div>
      <div className="brand">
        <div className="logo">
          <Link href="/">
            <a><img src={logo}/></a>
          </Link>
        </div>
        <div>
          Ⓒ skyCars. Aquí no hay derechos
        </div>
      </div>
    </footer>
  );
}
export default Footer;