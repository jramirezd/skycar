import React from "react";
import { connect } from "react-redux";
import Head from 'next/head';
import { PasswordForgetForm } from "./pw-forget";
import PasswordChangeForm from "../components/PasswordChange";
import Layout from "../components/layout";

const AccountPage = ({ authUser }) => (
  <>
  <Head>
    <title>SkyCars - mi cuenta</title>
  </Head>
  <Layout>
    <main>
      <div>Mi email: {authUser.email}</div>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </main>
  </Layout>
  </>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(AccountPage);
