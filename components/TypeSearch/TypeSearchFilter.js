import React, { useState } from 'react';
import Link from 'next/link';

const TypeSearchFilter = () => {
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
    <div className="category">
      <ul>
        {types.map(item => (
           <li key={item.id}>
           <Link href={`/list?=${item.name}`}>
             <a alt={item.category} title={item.category}>
                <div className="type-box">
                    <img src={`/icons/${item.category}.svg`} />
                    <span>{item.category}</span>
                </div> 
             </a>
           </Link>
         </li>
          ))}
        
      </ul>
    </div>
  );
}
export default TypeSearchFilter;