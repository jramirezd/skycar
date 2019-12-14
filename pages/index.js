import React, { useState, useEffect, useContext } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import Hero from '../components/Hero';
import Brands from '../components/Brands'
import TypeSearch from '../components/TypeSearch'
import CardItemHome from '../components/Cards/CardItemHome'
import Card from '../components/Cards/Card'
import UserContext from '../components/UserContext'

export default function Index() {
  const [cars, setCars] = useState([]);
  const user  = useContext(UserContext);
  return (
    <>
     <Head>
    <title>SkyCars - La plataforma de carcharing de los Skylabers</title>
    </Head>
    <Layout>
      <Hero />
      <main>
        <Brands/>
        <TypeSearch/>
        <CardItemHome Title="Los más nuevos" SubTitle="Adelántate a los otros usuarios, estos los acaban de poner!" TypeCard="lite">
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
      </main>
    </Layout>
    </>
  );
}