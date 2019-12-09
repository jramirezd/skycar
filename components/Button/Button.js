import React from 'react';

const Button = ({ children, classItem }) => {
  return (
    <button className={classItem}>{children}</button>
  )
}

export default Button;