import React, { Component } from "react";
import Link from "next/link";
import Head from 'next/head';
import LayoutUser from "../components/layoutUser";
import logo from '../public/img/logo-white.svg';

import { auth } from "../services";

const PasswordForgetPage = () => (
  <>
  <Head>
    <title>SkyCars - Recuperar Password</title>
  </Head>
  <LayoutUser>
  <main className="login">
   <aside className="hero-image image-log">
         <div className="logo">
            <Link href="/">
              <a><img src={logo}/></a>
            </Link>
         </div>
         <div className="text-box">
          <h1>Compra y venta de coches de los Skycoders</h1>
          <p>
              Busca, encuentra y vende tu anterior vehículo. 
          </p>
        </div>
      </aside>
  <aside className="form-box">
    <PasswordForgetForm />

  </aside>
    
  </main>
  </LayoutUser>
  </>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit}>
      <fieldset>
      {error && <p>{error.message}</p>}
        <input
          value={this.state.email}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="tu email"
        />
        </fieldset>
        <fieldset>
        <button disabled={isInvalid} type="submit">
         Resetear Password
        </button>
        </fieldset>

        
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link href="/pw-forget">
      <a>¿Has olvidado tu contraseña?</a>
    </Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
