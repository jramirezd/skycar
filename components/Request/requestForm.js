import React, { useState, useSelector } from 'react';
import Button from '../Button';
import { addRequest } from '../../services/db';
import FormInput from '../FormInput';
import FormTextarea from '../FormInput/FormTextarea';

const ResquestForm = ({id, user}) => {
    const [error, setError] = useState('');
    const [submited, setSubmited] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        text:''
    });
 const onSubmit = (event) => {
    event.preventDefault();
    setError('');
    const {phone, email, text} = formData;
    addRequest(id, phone, email, text).then(() => {
    })
    if (!phone || !email || !text) {
      setError('Todos los campos son obligatorios');
    }
    setSubmited(true);
  }
  
  return (
    <section className="add-car-form">
    <div className="form">
    <h3>Contactar con {user}</h3>
    {error && <div className="error">{error}</div>}
    {submited ? <div className="done">Solicitud enviada</div> : (

    <form onSubmit={onSubmit}>
  
        <FormInput 
          label="Teléfono" 
          value={formData.phone} 
          onChange={value => setFormData({ ...formData, phone: value })} 
        />
        <FormInput 
          label="Email" 
          value={formData.email} 
          onChange={value => setFormData({ ...formData, email: value })} 
        />
    
        <FormTextarea 
          label="Descripción" 
          value={formData.text} 
          onChange={value => setFormData({ ...formData, text: value })} 
        />
        <fieldset>
        <Button type="submit">
          Contactar
        </Button>
        </fieldset>
        
      </form>
      )}
    </div>
  </section>
  );
}
export default ResquestForm;