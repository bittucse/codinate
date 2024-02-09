// Button component
import React from 'react';

const Button = ({ label, setshowModal}) => {
  return (
    <button
      className={`
        flex justify-center w-full md:w-60 bg-white hover:bg-cyan-300 items-center hover:shadow-cyan-300 shadow-md hover:font-semibold gap-2 px-4 md:px-7 py-3 md:py-4 border font-montserrat text-sm md:text-lg leading-none rounded-full
      `}
      onClick={() => setshowModal(true)}
    >
      {label} 
    </button>
  );
};

export default Button;
