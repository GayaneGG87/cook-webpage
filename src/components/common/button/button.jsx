import React from 'react';
import './button.module.scss';

export const Button = ({children, ...props}) => {
    return (
      <button {...props}>
          {children}
      </button>
    )
  }
  
