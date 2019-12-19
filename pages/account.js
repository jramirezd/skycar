import React, { useState, useEffect }  from "react";
import { useRouter } from 'next/router'
import Head from 'next/head';
import { PasswordForgetForm } from "./pw-forget";
import PasswordChangeForm from "../components/PasswordChange";
import LayoutAdmin from "../components/layoutAdmin";
import useGetAdv from '../logic/useGetAdv';

const AccountPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const user = useGetAdv('users', id);  
  const data = user[0];
  const ubicacion = data.provincia;
  return (
  <>
  <Head>
    <title>SkyCars - mi cuenta</title>
  </Head>
  <LayoutAdmin>
    <main>
      <h2>Hola {data.name} {data.surname}</h2>
      <div>
        <span>Nombre</span>
        <span>{data.name} {data.surname}</span>
      </div>
      <div>
        <span>Email</span>
        <span>{data.email}</span>
      </div>
      <div>
        <span>Teléfono</span>
        <span>{data.phone}</span>
      </div>
      <div>
        <span>Provincia</span>
        <span>{data.provincia}</span>
      </div>
      <h3>Cambiar password</h3>
      <div>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    </main>
  </LayoutAdmin>
  </>
  );
}


export default AccountPage;
