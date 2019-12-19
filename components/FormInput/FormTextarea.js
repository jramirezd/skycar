import React from 'react';

const FormTextarea = ({ label, value, onChange, type = 'text' }) => {
  return (
    <fieldset>
      <label>{label}</label><br/>
      <textarea type={type} value={value} onChange={event => onChange(event.target.value)} />
    </fieldset>
  );
}
 
export default FormTextarea;