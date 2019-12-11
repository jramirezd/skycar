import React, { useState } from 'react';
import Link from 'next/link';

const CardLiteHome = ({brand, model, id, kms, price, location, year, category, tag, photo}) => {
    return (
      <article className="card" key={id}>
        <div className="image">
            <img src={photo} />
            <div className="price">
                {price}
            </div>
        </div>
        <div className="content-box">
            <h3>{brand} {model} {year}</h3>
            <div className="tags">
                <span>{category}</span>
                <span>{tag}</span>
            </div>
            <div className="property">
                <span>Km:</span>
                <p>{kms}</p>
            </div>
            <div className="property">
                <span>Ubicación:</span>
                <p>{location}</p>
            </div>
        </div>
      </article>
    );
  }
  export default CardLiteHome;