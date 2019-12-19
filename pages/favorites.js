import React, { useState, useEffect } from 'react';
import LayoutAdmin from "../components/layoutAdmin";
import { useRouter } from 'next/router'
import Head from 'next/head';
import CardItemHome from '../components/Cards/CardItemHome'
import Card from '../components/Cards/Card'
import useGetAdv from '../logic/useGetAdv';
import useGetFavs from '../logic/useGetFavs';

export default function Favorites() {
  const router = useRouter();
  const { id } = router.query;
  const user = useGetAdv('users', id); 
  const favItems = user[0].favorites;
  const cars = useGetFavs('adv', favItems); 

  return (
    <>
     <Head>
        <title>SkyCars - Todos los coches a tu alcance</title>
    </Head>
    <LayoutAdmin>
      <main className="adv-lists">
         <section className="ads-items">
            <CardItemHome Title="Resultados" TypeCard="full">
            {cars.map(item => (
            <Card 
                brand={item.brand} 
                model={item.model} 
                id={item.id} 
                kms={item.kms} 
                price={item.price}
                location={item.location} 
                year={item.year} 
                category={item.category} 
                tag={item.tag} 
                photo={item.photo} 
            />
            ))}
            </CardItemHome>   
         </section>
      </main>
    </LayoutAdmin>
    </>
  );
}