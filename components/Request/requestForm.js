import React, { useState, useSelector } from 'react';
import Button from '../Button';
import { addRequest } from '../../services/db';
import FormInput from '../FormInput';
import FormTextarea from '../FormInput/FormTextarea';

const ResquestForm = ({id}) => {
    const [error, setError] = useState('');
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
  }
  
  return (
    <section className="add-car-form">
    <div className="brands">
    {error && <p>{error.message}</p>}
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
        
        <Button type="submit">
          Publicar
        </Button>
      </form>
    
    </div>
  </section>
  );
}
export default ResquestForm;