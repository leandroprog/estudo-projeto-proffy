import React, { SelectHTMLAttributes } from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        { options.map(item => {
          return <option key={item.value} value={item.value} label={item.label} ></option>
        })}
      </select>
    </div>
  )
}

export default Select;