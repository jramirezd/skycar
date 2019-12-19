import React, { Component, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head";

import { auth, db } from "../services";
import Layout from "../components/layout";
import Select from "react-select";

const SignUpPage = () => (
  <>
  <Head>
  <title>SkyCars - Crear cuenta</title>
  </Head>
  <Layout>
    <main>
      <h1>Crear cuenta</h1>
      <SignUpForm />
    </main>
  </Layout>
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
        <input
          value={username}
          onChange={event =>
            this.setState(updateByPropertyName("username", event.target.value))
          }
          type="text"
          placeholder="Nombre"
        />
         <input
          value={surname}
          onChange={event =>
            this.setState(updateByPropertyName("surname", event.target.value))
          }
          type="text"
          placeholder="Apellido"
        />
         <input
          value={phone}
          onChange={event =>
            this.setState(updateByPropertyName("phone", event.target.value))
          }
          type="text"
          placeholder="Teléfono"
        />
        <input
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="Email"
        />
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
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
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    No tienes cuenta? {" "}
    <Link href="/signup">
      <a>Crear cuenta</a>
    </Link>
  </p>
);
export default SignUpPage;
export { SignUpForm, SignUpLink };
