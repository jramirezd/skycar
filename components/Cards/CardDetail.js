import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button'

const CardDetail = ({brand, model, id, kms, price, location, year, category, tag, photo}) => {
    return (
      <article className="card">
        <div className="image">
            <Link href="/detail">
                <a>
                   <img src={photo} />
                </a>
            </Link>
            <div className="images">
                <img src={photo} /> 
                <img src={photo} />
                <img src={photo} />
                <img src={photo} />
                <img src={photo} /> 
            </div>
        </div>
        <button>Add fav</button>
        <div className="content-box">
              <h3>{brand} {model} {year}</h3>
              <div className="price">
                    {price}
                </div> 
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
  export default CardDetail;