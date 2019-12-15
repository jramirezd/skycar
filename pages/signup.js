import React, { useState, useEffect, setState } from "react";
import Head from 'next/head';
import { Router } from 'next/router'
import { signup, registerAuthObserver } from '../services/auth';
import { addItemWithId, getItem } from '../services/database';
import LayoutAdmin from "../components/layout";

let cancelObserver;

export default function SignUpPage() {
  const [formData, setFormData] = useState({name: '', email: '', password: '', passwordTwo: '', error: null});
  const [error, setError] = useState('');


  useEffect(() => {
    if (cancelObserver) cancelObserver();

    cancelObserver = registerAuthObserver(async (user) => {
      if (user) {
        const profile = await getItem('profiles', user.uid);
        if (!profile) {
          const result = await addItemWithId(
            'profiles', 
            { name: formData.name, email: formData.email },
            user.uid
          );   
          if (result) {
            Router.push('/');
          }     
        }        
      }
    })

    return () => {
      cancelObserver();
    }
  }, [formData.name, formData.email])

  const onSubmit = (event) => {
    event.preventDefault();
    setError('');

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('Todos los campos son obligatorios');
    } else {
      signup(email, password);
    }
  }
  return (
  <>
  <Head>
  <title>SkyCars - Crear cuenta</title>
  </Head>
  <LayoutAdmin>
    <main>
      <h1>Crear cuenta</h1>
      <form onSubmit={onSubmit}>
        <input
          value={formData.name} 
          onChange={value => setFormData({ ...formData, name: value })} 
          type="text"
          placeholder="Full Name"
        />
        <input
          value={formData.email} 
          onChange={value => setFormData({ ...formData, email: value })} 
          type="text"
          placeholder="Email Address"
        />
        <input
          value={formData.password} 
          onChange={value => setFormData({ ...formData, password: value })} 
          type="password"
          placeholder="Password"
        />
        <input
          value={formData.passwordTwo} 
          onChange={value => setFormData({ ...formData, passwordTwo: value })} 
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </main>
  </LayoutAdmin>
  </>
 );
}