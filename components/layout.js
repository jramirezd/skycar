import Header from './Header';
import Footer from './Footer';
import { AppWithAuthentication } from "../components/App";
import '../styles/scss/styles.scss';


const Layout = props => (
  <AppWithAuthentication>
    <Header />
    {props.children}
    <Footer />
  </AppWithAuthentication>
);


export default Layout;