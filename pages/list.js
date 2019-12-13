import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import CardItemHome from '../components/Cards/CardItemHome'
import Card from '../components/Cards/Card'
import Filter from '../components/Filter'

export default function List() {
  const [cars] = useState([
    {
        brand: "Audi", 
        model: "A3", 
        id: 1, 
        price: 16000,
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "BMW", 
        model: "X3", 
        id: 2, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2018, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "Honda", 
        model: "Accord", 
        id: 3, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "Toyota", 
        model: "Auris", 
        id: 4, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }
    ]);
  return (
    <>
     <Head>
        <title>SkyCars - Todos los coches a tu alcance</title>
    </Head>
    <Layout>
      <main className="adv-lists">
        <Filter />
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
    </Layout>
    </>
  );
}