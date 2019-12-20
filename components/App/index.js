import React, {useEffect} from "react";
import { useDispatch } from 'react-redux'
import { compose } from "recompose";
import { getAll } from '../../services/db';

import withAuthentication from "../Session/withAuthentication";
import withAuthorization from "../Session/withAuthorization";

const App = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData('cars');
    fetchCat('categories');
    fetchProv('provincias');
  }, []);

  const fetchData =  async (collection) => {
    const brands = await getAll(collection);
    dispatch({ type: 'DATA_SET', brands })
  }
  const fetchCat =  async (collection) => {
    const categories = await getAll(collection);
    dispatch({ type: 'CAT_SET', categories })
  }
  const fetchProv =  async (collection) => {
    const provinces = await getAll(collection);
    dispatch({ type: 'PROV_SET', provinces })
  }
return(  
  <div className="bg-grey">
    {children}
  </div>
)};
const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorization(false)
)(App);
const AppWithAuthorization = compose(
  withAuthentication,
  withAuthorization(true)
)(App);
export { AppWithAuthentication, AppWithAuthorization };
