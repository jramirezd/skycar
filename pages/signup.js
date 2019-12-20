import React, { Component, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head";
import logo from '../public/img/logo-white.svg';

import { auth, db } from "../services";
import LayoutUser from "../components/layoutUser";
import Select from "react-select";

const SignUpPage = () => (
  <>
  <Head>
  <title>SkyCars - Crear cuenta</title>
  </Head>
  <LayoutUser>
  <main className="login">
      <aside className="hero-image image">
         <div className="logo">
            <Link href="/">
              <a><img src={logo}/></a>
            </Link>
         </div>
         <div className="text-box">
          <h1>Crea tu cuenta</h1>
        </div>
      </aside>
  <aside className="form-box signup">
      <SignUpForm />
    <div className="bottom-box">
        <p>
        ¿Ya tienes cuenta?  
        <Link href="/signin">
          <a> Iniciar sesión</a>
        </Link>
      </p>
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
  id: "",
  username: "",
  surname: "",
  email: "",
  phone: "",
  selectedOption: null,
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  
  onSubmit = event => {
    const { username, surname, email, phone, selectedOption, passwordOne } = this.state;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, username, surname, email, phone, selectedOption)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            Router.push('/');
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });
    event.preventDefault();
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { username, surname, email, phone, selectedOption, passwordOne, passwordTwo, error } = this.state;
    const options = [
      { value: 'barcelona', label: 'Barcelona' },
      { value: 'madrid', label: 'Madrid' },
      { value: 'valencia', label: 'Valencia' },
    ];
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || username === "";

    return (
      <form onSubmit={this.onSubmit}>
      {error && <p>{error.message}</p>}
      <fieldset>
        <input
          value={username}
          onChange={event =>
            this.setState(updateByPropertyName("username", event.target.value))
          }
          type="text"
          placeholder="Nombre"
        />
        </fieldset>
        <fieldset>
         <input
          value={surname}
          onChange={event =>
            this.setState(updateByPropertyName("surname", event.target.value))
          }
          type="text"
          placeholder="Apellido"
        />
        </fieldset>
        <fieldset>
         <input
          value={phone}
          onChange={event =>
            this.setState(updateByPropertyName("phone", event.target.value))
          }
          type="text"
          placeholder="Teléfono"
        />
        </fieldset>
        <fieldset>
        <input
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="Email"
        />
        </fieldset>
        <fieldset>
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      </fieldset>
      <fieldset>
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordOne", event.target.value)
            )
          }
          type="password"
          placeholder="Password"
        />
        </fieldset>
        <fieldset>
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordTwo", event.target.value)
            )
          }
          type="password"
          placeholder="Confirm Password"
        />
        </fieldset>
        <fieldset>
        <button disabled={isInvalid} type="submit">
          Darse de alta
        </button>
        </fieldset>
        
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    ¿No tienes cuenta?  {" "}
    <Link href="/signup">
      <a> Crear cuenta</a>
    </Link>
  </p>
);
export default SignUpPage;
export { SignUpForm, SignUpLink };
