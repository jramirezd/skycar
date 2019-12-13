import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import CardDetail from '../components/Cards/CardDetail'

export default function Detail() {
  const [car] = useState(
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
    }
    );
  return (
    <>
     <Head>
    <title>{car.brand} {car.model} {car.location}</title>
    </Head>
    <Layout>
      <main className="detail">
        <section>
        <CardDetail 
              brand={car.brand} 
              model={car.model} 
              id={car.id} 
              kms={car.kms} 
              price={car.price}
              location={car.location} 
              year={car.year} 
              category={car.category} 
              tag={car.tag} 
              photo={car.photo} 
           />
        </section>
        <aside>
          Contactar

          No logeado
          SI logeado
        </aside>
      </main>
    </Layout>
    </>
  );
}