import React, { useState } from 'react';
import Link from 'next/link';

const CardLite = ({ children, Title, SubTitle, TypeCard }) => {
    
    return (
      <aside className="cards-home">
      <div>
        <h2>{Title}</h2>
        <p>{SubTitle}</p>
      </div>
      <div className={`card ${TypeCard}`}>
         {children}
      </div>
    </aside>
    );
  }
  export default CardItemLite;