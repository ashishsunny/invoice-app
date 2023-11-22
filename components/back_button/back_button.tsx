'use client'
import React from 'react';

const BackButton: React.FC = () => {
  return (
    <div className="flex ml-[1.5rem] mt-[2rem] text-white text-[.93rem]">
      <img className="w-[.4rem] h-[.7rem]" src="http://localhost:3000/images/icon-arrow-left.svg" alt="go back img" />
      <p className="pl-[1.5rem] font-bold">Go Back</p>
    </div>
  );
};

export default BackButton;
