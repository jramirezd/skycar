import Header from './Header';
import Footer from './Footer';

import WithAuthentication from "./Session/withAuthentication";

import '../styles/scss/styles.scss';

const Layout = props => (
  <WithAuthentication>
    <Header />
    {props.children}
    <Footer />
  </WithAuthentication>
);


export default Layout;