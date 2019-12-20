import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import CardItemHome from '../components/Cards/CardItemHome'
import Card from '../components/Cards/Card'
import Filter from '../components/Filter'
import useGetAll from '../logic/useGetAll';

export default function List() {
  const [cars] = useGetAll('adv');
  return (
    <>
     <Head>
        <title>SkyCars - Todos los coches a tu alcance</title>
    </Head>
    <Layout>
      <main className="adv-lists">
        <Filter />
         <section className="ads-items full">
            <CardItemHome Title="Resultados" TypeCard="full">
            {cars.map(item => (
            <article className="card" key={item.id}>
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
            </article>
            ))}
            </CardItemHome>   
         </section>
      </main>
    </Layout>
    </>
  );
}