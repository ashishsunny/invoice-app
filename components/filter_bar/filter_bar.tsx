'use client'
import React, { CSSProperties } from 'react'


interface MyComponentProps {
    classN?: CSSProperties; 
}

const FilterBar: React.FC<MyComponentProps> = ({ classN}) => {
  return (
    <div className={`pt-[3.5rem] flex justify-between items-center px-[1.5rem] pb-[3rem] h-[2.7rem]`}>
      <div className='w-[5rem]'>
        <p className='text-2xl font-bold text-white'>Invoices</p>
        <p className='text-[.8rem] text-color2 font-normal pt-[1.5rem]'>7 invoices</p>
    </div>

    <div className='flex'>
        <div className='flex items-center mr-[1.16rem]'>
            <p className='mr-[.75rem] text-[.9rem] text-white font-normal'>Filter</p>
            <img className='w-[.52rem] h-[.26rem]' src="http://localhost:3000/images/icon-arrow-down.svg" alt="" />
        </div>

        <div className='flex items-center justify-center w-[5.6rem] h-[2.7rem] rounded-[1.5rem] bg-color4'>
            <div className='p-[.38rem] flex justify-between items-center'>
                <img className='w-[2rem] h-[2rem] mr-[.6rem]' src="http://localhost:3000/images/button-plus.svg" alt="" />
                <p className='font-normal text-[.9rem] text-white'>New</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
