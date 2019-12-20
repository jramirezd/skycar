import React from 'react';

const FormInput = ({ label, value, onChange, type = 'text' }) => {
  return (
    <fieldset>
      <label>{label}</label><br/>
      <input type={type} value={value} onChange={event => onChange(event.target.value)} />
    </fieldset>
  );
}
 
export default FormInput;