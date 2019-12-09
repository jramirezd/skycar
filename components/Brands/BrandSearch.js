import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';

const BrandSearch = () => {
  const [brands] = useState([
    {
        brand: "Audi", id: 1, ads: 2333
    }, 
    {
        brand: "BMW", id: 2, ads: 4222
    }, 
    {
        brand: "Hyndai", id: 3, ads: 2424
    }, 
    {
        brand: "Jaguar", id: 4, ads: 5
    }, 
    {
        brand: "Kia", id: 5, ads: 242
    }, 
    {
        brand: "Mercedes", id: 6, ads: 242
    }, 
    {
        brand: "Porsche", id: 7, ads: 4242
    }, 
    {
        brand: "Volkswagen", id: 8, ads: 4242
    }
    ]);
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
        {brands.map(item => (
           <li key={item.id}>
           <Link href="/">
             <a alt={item.brand} title={item.brand}>
                <div className="image-brand">
                    <img src={`/logos/${item.brand}.png`} />
                </div> 
               <span>{item.ads}</span>
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