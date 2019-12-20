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
    <main className="admin">
      <h2>Hola {data.name} {data.surname}</h2>
      <div className="property">
        <span>Nombre</span>
        <div>{data.name} {data.surname}</div>
      </div>
      <div className="property">
        <span>Email</span>
        <div>{data.email}</div>
      </div>
      <div className="property">
        <span>Teléfono</span>
        <div>{data.phone}</div>
      </div>
      <div className="property">
        <span>Provincia</span>
        <div>{data.provincia}</div>
      </div>
      <h3>Cambiar password</h3>
      <div className="bottom-box">
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    </main>
  </LayoutAdmin>
  </>
  );
}


export default AccountPage;
