import React, { useState } from 'react';
import Link from 'next/link';

const CardLiteHome = ({ children, Title, SubTitle, TypeCard }) => {
  const [cars] = useState([
    {
        brand: "Audi", 
        model: "A3", 
        id: 1, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "BMW", 
        model: "X3", 
        id: 2, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2018, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "Honda", 
        model: "Accord", 
        id: 3, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "Toyota", 
        model: "Auris", 
        id: 4, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }
    ]);
    return (
      <aside className="cards-home">
      <div className="title-box">
        <h2>{Title}</h2>
        <p>{SubTitle}</p>
      </div>
      <div className={`card ${TypeCard}`}>
         {children}
      </div>
    </aside>
    );
  }
  export default CardLiteHome;