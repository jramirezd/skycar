import Link from 'next/link';
import { connect } from 'react-redux';


const NavLogOut = ({ authUser }) => {
    return(
  <nav>
    <Link href="/signin">
      <a className="btn-transparent">Iniciar sesión</a>
    </Link>
    <Link href={authUser ? '/newadd' : '/signin'}>
      <a className="big-cta">Vende tu coche</a>
    </Link>
  </nav>
);
}


const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(NavLogOut);
