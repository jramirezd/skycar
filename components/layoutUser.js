import { AppWithAuthentication } from "../components/App";
import '../styles/scss/styles.scss';


const LayoutUser = props => (
  <AppWithAuthentication>
    {props.children}
  </AppWithAuthentication>
);


export default LayoutUser;