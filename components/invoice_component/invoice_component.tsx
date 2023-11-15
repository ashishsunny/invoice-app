'use client'
import React, { CSSProperties } from 'react'


interface MyComponentProps {
    classN?: CSSProperties; 
}

const InvoiceComponent: React.FC<MyComponentProps> = ({ classN }) => {
  return (
    <div className='rounded-[0.5rem] mx-[1.5rem] h-[8.3rem] bg-color3 text-white'>

        <div className='p-[1.5rem] flex justify-between items-center'>

        <div>
            <div className='flex'><p className='text-steelblue font-bold'>#</p><p className='font-bold'>RT3080</p></div> 
            <p className='pt-[1.5rem] text-[.8rem] text-color2'>Due 19 Aug 2021</p>
            <p className='pt-[0.5rem] font-bold'>$ 1,800.90</p>
        </div>

        <div>
            <p>Jensen Huang</p>
            <div className=' bg-success mt-[1.5rem] bg-opacity-[0.05] flex rounded-[.375rem]'>
                <div className='flex w-[6.2rem] h-[2.5rem] px-[1.8rem] py-[.8rem]'>
                <div className='flex items-center pr-[.5rem]'>
                    <div className='w-[.5rem] h-[.5rem] bg-success rounded-[50%]'></div>
                </div>
                
                <div className='text-success font-bold'>Paid</div>
                </div>
            </div>
        </div>

        </div>

    </div>
  )
}

export default InvoiceComponent
