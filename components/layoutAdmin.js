import Header from './Header';
import Footer from './Footer';
import { AppWithAuthorization } from "../components/App";
import '../styles/scss/styles.scss';


const LayoutAdmin = props => (
  <AppWithAuthorization>
    <Header />
    {props.children}
    <Footer />
  </AppWithAuthorization>
);


export default LayoutAdmin;