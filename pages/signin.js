import React, { Component } from "react";
import Router from "next/router";
import Head from 'next/head';
import Link from 'next/link';
import { SignUpLink } from "./signup";
import { PasswordForgetLink } from "./pw-forget";
import { auth } from "../services";
import LayoutUser from "../components/layoutUser";
import logo from '../public/img/logo-white.svg';


const SignInPage = () => (
  <>
  <Head>
    <title>SkyCars - Iniciar sesión</title>
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
    <SignInForm />
    <PasswordForgetLink />
    <div className="bottom-box">
      <SignUpLink />
    </div>
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
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        Router.push('/index');
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
      {error && <p>{error.message}</p>}
      <fieldset>
        <input
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
         </fieldset>
         <fieldset>
        <input
          value={password}
          onChange={event =>
            this.setState(updateByPropertyName("password", event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        </fieldset>
        <fieldset>
          <button disabled={isInvalid} type="submit">
            Iniciar sesión
          </button>
        </fieldset> 
      </form>
    );
  }
}

export default SignInPage;

export { SignInForm };
