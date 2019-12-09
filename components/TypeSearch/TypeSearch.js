import React, { useState } from 'react';
import Link from 'next/link';

const TypeSearch = () => {
  const [types] = useState([
    {
      category: "Hatchback", id: 1
    }, 
    {
      category: "Sedan", id: 2
    }, 
    {
      category: "Coupe", id: 3
    }, 
    {
      category: "Wagon", id: 4
    }, 
    {
      category: "SUV", id: 5
    }, 
    {
      category: "Van", id: 6
    }
    ]);
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
             <a alt={item.category} title={item.category}>
                <div className="type-box">
                    <img src={`/categories/${item.category}.png`} />
                    <span>{item.category}</span>
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