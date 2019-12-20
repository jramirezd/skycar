import React from "react";
import Head from "next/head";
import LayoutAdmin from "../components/layoutAdmin";
import AddForm from "../components/Adv/AddForm";


const NewAdd = () => {

    return(
  <>
  <Head>
  <title>SkyCars - Añade tu coche</title>
  </Head>
  <LayoutAdmin>
  <main className="add-car admin">
     <h2>Publicar coche <span>Todos los campos son obligatorios</span></h2>
      <AddForm />
    </main>
    </LayoutAdmin>
  </>
  );
};
export default NewAdd;

