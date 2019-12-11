import React, { useState } from 'react';
import Link from 'next/link';

const CardLiteHome = ({ children, Title, SubTitle, TypeCard }) => {
    return (
      <aside className="cards-home">
      <div className="title-box">
        <h2>{Title}</h2>
        <p>{SubTitle}</p>
      </div>
      <div className={`card-box ${TypeCard}`}>
         {children}
      </div>
    </aside>
    );
  }
  export default CardLiteHome;