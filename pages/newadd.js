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
  <main className="add-car">
     <h1>Vende tu coche</h1>
      <AddForm />
    </main>
    </LayoutAdmin>
  </>
  );
};
export default NewAdd;

