import { useState, useContext } from 'react';
import UserContext from '../components/UserContext';
import Layout from '../components/layout';
import useForm from 'react-hook-form';

export default function logIn() {
  const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <Layout>
        <h1>Pelis favoritas</h1>
        <p>Sed irure fistro diodeno esse ese pedazo de benemeritaar. Nisi a peich nostrud minim qui no te digo trigo por no llamarte Rodrigor incididunt está la cosa muy malar adipisicing jarl. Diodeno ese hombree tiene musho peligro ahorarr ese que llega. La caidita sed me cago en tus muelas ut dolor eiusmod tiene musho peligro elit dolor dolor te va a hasé pupitaa.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="example" defaultValue="test" ref={register} />
          <input name="exampleRequired" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
    </Layout>
  );
}