import React from 'react';
import Button from './Button';

const ProgramCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-[23rem] h-auto" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h2 className="mb-2 text-lg font-bold text-gray-900 tracking-normal dark:text-white leading-6">
            {title}
          </h2>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-xs font-sans dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-center items-center">
          <Button variant="rounded">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
