import Header from './Header';
import Footer from './Footer';
import '../styles/scss/styles.scss';


const Layout = props => (
  <div className="bg-grey">
    <Header />
    {props.children}
    <Footer />
  </div>
);


export default Layout;