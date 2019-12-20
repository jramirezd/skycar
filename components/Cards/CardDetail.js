import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Button'
import Heart from '../../public/icons/Heart-line.svg';
import HeartFav from '../../public/icons/Heart.svg';
import LocalStorage from '../../services/localstorage';

const CardDetail = ({brand, model, id, kms, price, location, year, category, tag, photo, favorite}) => {
    const [isFav, setFav] = useState(favorite);

    const removeFavorite = async () => {
        console.log("favorito out");
        //db.removeFav(idUsr, id)
        setFav(false);
    }
    const addFavorite = async () => {
        //db.addFav(idUsr, id);
        console.log("favorito in");
        setFav(true);
    }
    return (
      <article className="card">
        <div className="image">
            <Link href="/detail">
                <a>
                   <img src={photo} />
                </a>
            </Link>
            {isFav ?  
                <button className="fav" onClick={removeFavorite}><img src={HeartFav}/></button> 
            :  
                <button className="fav" onClick={addFavorite}><img src={Heart}/></button>
            }
            <div className="images">
                <img src={photo} /> 
                <img src={photo} />
                <img src={photo} />
                <img src={photo} />
                <img src={photo} /> 
            </div>
        </div>
        <div className="content-box">
             <div className="price">
                {price}€
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