import React from 'react';

export const Select = ({ children, value, onChange, className = '' }) => {
  return (
    <select 
      value={value} 
      onChange={onChange} 
      className={`border border-gray-300 rounded-md p-2 ${className}`}
    >
      {children}
    </select>
  );
};
