import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import Hero from '../components/Hero';
import Brands from '../components/Brands'
import TypeSearch from '../components/TypeSearch'
import CardItemHome from '../components/Cards/CardItemHome'
import Card from '../components/Cards/Card'

export default function Index() {
  const [cars] = useState([
    {
        brand: "Audi", 
        model: "A3", 
        id: 1, 
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