import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button';
import { auth, db } from '../../services';
import useGetAdv from '../../logic/useGetAdv';
import Heart from '../../public/icons/Heart-line.svg';
import HeartFav from '../../public/icons/Heart.svg';
import LocalStorage from '../../services/localstorage';


const CardLiteHome = ({brand, model, id, kms, price, location, year, category, tag, photo}) => { 


    const [isFav, setFav] = useState(false);

    const getFavorites = (key) => {
        return LocalStorage.getFavorites(key);
    } 

    const addFav = (id) => {
        const favorites = getFavorites("cars");
        //db.addFav(idUsr, id);
        if(favorites){
            const parsed = favorites.split(",");
            if(!parsed.includes(id.toString())){
                const new_favorites = [...parsed];
                new_favorites[new_favorites.length] = id;
                LocalStorage.setFavorite("cars", new_favorites);
            }else{
                console.log("included")
            }
        } else{
            const new_favorites = [id];
            LocalStorage.setFavorite("cars", new_favorites);
        }
    }

    const removeFav = (id) => {
        const favorites = getFavorites("cars");
        const parsed = favorites.split(",");
        const new_favorites = [...parsed];
        new_favorites.splice(new_favorites.indexOf(id.toString()),1);
        LocalStorage.setFavorite("cars", new_favorites);
        //db.removeFav(idUsr, id)
    }

    const isFavState = (id) => { //initial check if was already favorite.
        const favorites = getFavorites("cars");
        if(favorites){
            if(favorites.includes(id.toString())){
                setFav(true);
            }
        }
    }

    useEffect( () => { //initially gets and sets the favorites...
        isFavState(id);
    }, [])

    const handleFav = () => { //to handle the toggle of fav button
        if(!isFav){
            setFav(true);
            addFav(id);
        } else{
            setFav(false);
            removeFav(id);
        }
    }

    return (
        <>
        <div className="image">
            <Link href="/detail/[id]" as={`/detail/${id}`}>
                <a>
                   <img src={photo} />
                <div className="price">
                    {price}€
                </div> 
                </a>
            </Link>
            {isFav ?  
                <button className="fav" onClick={handleFav}><img src={HeartFav}/></button> 
            :  
                <button className="fav" onClick={handleFav}><img src={Heart}/></button>
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