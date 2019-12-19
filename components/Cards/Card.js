import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button';
import { auth, db } from '../../services';


const CardLiteHome = ({brand, model, id, kms, price, location, year, category, tag, photo, favorite}) => {
    const [isFav, setFav] = useState(false);
    const idUsr = useSelector(state => state.sessionState.authUser.uid)
    
    const removeFavorite = async () => {
       console.log("favorito out");
       setFav(false);
      }
      const addFavorite = async () => {
        db.addFav(idUsr, id);
        console.log("favorito in");
        setFav(true);
      }
    return (
        <>
        <div className="image">
            <Link href="/detail/[id]" as={`/detail/${id}`}>
                <a>
                   <img src={photo} />
                <div className="price">
                    {price}
                </div> 
                </a>
            </Link>
            {isFav ?  
                <button onClick={removeFavorite}>Es favorito</button> 
            :  
                <button onClick={addFavorite}>No favorito</button>
            }
        </div>
        <div className="content-box">
           <Link href="/detail/[id]" as={`/detail/${id}`}>
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
        </>
    );
  }
  export default CardLiteHome;