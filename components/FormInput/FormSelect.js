import React from 'react';

const FormSelect = ({ label, value, onChange, options, type = 'select' }) => {
  return (
    <fieldset>
      <label>{label}</label><br/>
      <select type={type} value={value} onChange={event => onChange(event.target.value)} >
          {options && options.map((data) => <option value={data} key={data}>{data}</option>)}
      </select>
    </fieldset>
  );
}
 
export default FormSelect;