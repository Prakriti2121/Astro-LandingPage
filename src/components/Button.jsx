import React from 'react';

const Button = ({ children, className, variant = 'default' }) => {

  const defaultClassNames = 'text-white bg-primary rounded-lg hover:bg-green-600 md:block py-2 mr-8 px-4 text-sm';
  const roundedClassNames = 'text-white bg-primary rounded-full hover:bg-green-600 md:block py-2 mr-8 px-4 text-sm';
  const secondaryClassNames = 'bg-white text-primary border border-primary px-8 py-2 rounded-full hover:bg-gray-100 md:block text-sm';
  const tertiaryClassNames = 'bg-gray-300 text-black border border-gray-300 px-4 py-1 rounded-full text-xs'; 

  const buttonClassNames = 
    variant === 'rounded' ? roundedClassNames :
    variant === 'secondary' ? secondaryClassNames :
    variant === 'tertiary' ? tertiaryClassNames : 
    defaultClassNames;

  return (
    <button className={`${buttonClassNames} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
