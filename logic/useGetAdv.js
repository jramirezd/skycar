import React, { useState, useEffect } from 'react';
import { getItem } from '../services/db';

const useGetAdv = (collection, id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  async () => {
    setIsLoading(true);
    const data = await getItem(collection, id);
    setData(data);
    setIsLoading(false);
  }

  return [data, isLoading, fetchData];
}
 
export default useGetAdv;