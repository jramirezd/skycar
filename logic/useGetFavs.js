import React, { useState, useEffect } from 'react';
import { getItem } from '../services/db';

const useGetFavs = (collection = '', favs = []) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getFavs()
  }, [favs.length])
 
 const getFavs = async () => {
    const favsPromises = favs.map(id => {
        const data = getItem(collection, id);
        return data
      });
      const elems = await Promise.all(favsPromises)
      setData(elems)
 }
 return data
}
 
export default useGetFavs;