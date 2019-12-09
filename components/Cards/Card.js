import React, { useState } from 'react';
import Link from 'next/link';

const CardLiteHome = ({brand, model, id, kms, price, location, year, category, tag, photo}) => {
    return (
      <article className="card" key={id}>
        <div className="image">
            <img src={photo} />
            <div>
                {price}
            </div>
        </div>
        <h3>{brand} {model} {year}</h3>
        <div>
            <span>{category}</span>
            <span>{tag}</span>
        </div>
        <div>
            <span>Km:</span>
            <p>{kms}</p>
        </div>
        <div>
            <span>Ubicación:</span>
            <p>{location}</p>
        </div>
      </article>
    );
  }
  export default CardLiteHome;