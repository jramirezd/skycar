import React, { useState } from 'react';

const BrandsFilter = () => {
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
    <div className="category">
    <span className="title">Marcas</span>
      <ul>
        {brands.map(item => (
           <li key={item.id}>
             <div className="brand-box">
                <div className="image-brand">
                    <img src={`/logos/${item.brand}.png`} />
                </div> 
             </div>
         </li>
          ))}
        
      </ul>
    </div>
  );
}
export default BrandsFilter;