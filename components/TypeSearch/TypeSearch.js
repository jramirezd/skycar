import React, { useState } from 'react';
import Link from 'next/link';
import { addItem } from '../../services/db';
import useGetAll from '../../logic/useGetAll';

const TypeSearch = () => {
  const [types, isLoading, fetchTypes] = useGetAll('categories');

  return (
    <aside className="category-icons">
    <div>
      <h2>Buscar entre la categoría</h2>
    </div>
    <div className="category">
      <ul>
        {types.map(item => (
           <li key={item.id}>
           <Link href="/">
             <a alt={item.name} title={item.name}>
                <div className="type-box">
                    <img src={`/categories/${item.name}.png`} />
                    <span>{item.name}</span>
                </div> 
             </a>
           </Link>
         </li>
          ))}
        
      </ul>
    </div>
  </aside>
  );
}
export default TypeSearch;