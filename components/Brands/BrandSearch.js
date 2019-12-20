import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';
import { addItem } from '../../services/db';
import useGetAll from '../../logic/useGetAll';

const BrandSearch = () => {
  const [brands, isLoading, fetchBrands] = useGetAll('cars');

  return (
    <aside className="brand-icons">
    <div>
      <h2>Buscar por marcas</h2>
      <Button classItem={'cta-transparent arrow'}>
          Más marcas
      </Button>
    </div>
    <div className="brands">
      <ul>
        {brands.slice(0,8).map(item => (
           <li key={item.id}>
           <Link href={`/list?=${item.name}`}>
             <a alt={item.name} title={item.name}>
                <div className="image-brand">
                    <img src={`/logos/${item.name}.png`} />
                </div> 
               <span>{item.name}</span>
             </a>
           </Link>
         </li>
          ))}
        
      </ul>
    </div>
  </aside>
  );
}
export default BrandSearch;