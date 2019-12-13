import React, { useState } from 'react';
import Link from 'next/link';
import TypeSearchFilter from '../TypeSearch/TypeSearchFilter';
import BrandsFilter from './Brands';

const Filter = () => {
  
  return (
    <section className="filter-box">
        <h4>Filter</h4>
        <TypeSearchFilter/> 
        <BrandsFilter/> 
    </section>   
  );
}
export default Filter;