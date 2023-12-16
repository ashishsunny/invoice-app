'use client'
import React from 'react'
import Image from 'next/image'
import BackButton from '@/components/back_button/back_button'

const EditInvoice = () => {
  return (
    <div className="h-screen mx-[1.5rem] w-full bg-color1">

      <BackButton/>
      <div className="text-slate-500 mt-[1.62rem] text-[1.5rem] font-bold leading-8 tracking-tight self-stretch">
        <span className="text-white">Edit </span>
        <span className="text-text_grey">#</span>
        <span className="text-white">XM9141</span>
      </div>
      <div className="text-color4 mt-[1.37rem] text-[1rem] font-bold leading-4 tracking-tight self-stretch">
        Bill From
      </div>



    </div>
  )
}

export default EditInvoice
