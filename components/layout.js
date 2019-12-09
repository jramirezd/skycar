import Header from './Header';
import '../styles/scss/styles.scss';


const Layout = props => (
  <div className="bg-grey">
    <Header />
    {props.children}
  </div>
);


export default Layout;