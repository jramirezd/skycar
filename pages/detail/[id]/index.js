import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../../components/layout';
import Head from 'next/head';
import CardDetail from '../../../components/Cards/CardDetail';
import useGetAdv from '../../../logic/useGetAdv';
import RequestForm from '../../../components/Request/requestForm'

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [car] = useGetAdv('adv', id);  
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
          <div className="more-info">
            <h1>{car.brand} {car.model} {car.year}</h1>
            <div className="tags">
                <span>{car.category}</span>
                <span>{car.tag}</span>
                <span>{car.location}</span>
            </div>
            <h2>{car.destacado}</h2>
            <p>{car.description}</p>
          </div>
          <RequestForm id={car.id} user="Nombre usuario" />
        </aside>
      </main>
    </Layout>
    </>
  );
}