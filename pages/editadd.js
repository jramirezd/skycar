import React from "react";
import Head from "next/head";
import LayoutAdmin from "../components/layoutAdmin";
import EditForm from "../components/Adv/EditForm";


const EditAdd = () => {

    return(
  <>
  <Head>
  <title>SkyCars - Añade tu coche</title>
  </Head>
  <LayoutAdmin>
  <main className="add-car admin">
     <h2>Modificar anuncio <span>Como no tienes id de anuncio asociado te dejo subir</span></h2>
      <EditForm />
    </main>
    </LayoutAdmin>
  </>
  );
};
export default EditAdd;

