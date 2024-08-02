import React from 'react';

const Button = ({ children, className, variant = 'default' }) => {

  const defaultClassNames = ' text-white bg-primary rounded-lg hover:bg-green-600 md:block py-2 mr-8 px-4 text-sm';
  const roundedClassNames = 'text-white bg-primary rounded-full hover:bg-green-600 md:block py-2 mr-8 px-4 text-sm';


  const buttonClassNames = variant === 'rounded' ? roundedClassNames : defaultClassNames;
  
  return (
    <button className={`${buttonClassNames} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
