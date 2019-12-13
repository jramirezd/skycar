import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button'

const CardLiteHome = ({brand, model, id, kms, price, location, year, category, tag, photo}) => {
    return (
      <article className="card" key={id}>
        <div className="image">
            <Link href="/detail">
                <a>
                   <img src={photo} />
                <div className="price">
                    {price}
                </div> 
                </a>
            </Link>
        </div>
        <div className="content-box">
           <Link href="/detail">
                <a>
                    <h3>{brand} {model} {year}</h3>
                </a>
            </Link>
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
        <div className="contact-box">
        <Button classItem={'alternative'}>Contactar</Button>
        </div>
      </article>
    );
  }
  export default CardLiteHome;