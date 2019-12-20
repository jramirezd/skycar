import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const Hero = ({ authUser }) => {
  return (
    <div className="hero">
    <div className="text-box">
    <h1>La plataforma de compra y venta de coches favorita de los Skycoders</h1>
        <p>
             Deja de dar la vara a tus colegas y encuentra entre más de 10000 anuncios el vehículo que se adapta a tus necesidades.
        </p>
        <div className="cta-box">
          <Link href="/list">
            <a className="cta">Buscar</a>
          </Link>
          <Link href={authUser ? `/newadd?id=${authUser.uid}` : '/signin'}>
            <a className="cta cta-white">Vender</a>
          </Link>
        </div>
    </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(Hero);
