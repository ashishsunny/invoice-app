'use client'
import React from 'react'
import Image from 'next/image'

const EditInvoice = () => {
  return (
    <div className="flex flex-col items-stretch bg-gray-900">
      <div className="mt-2 flex items-end justify-between gap-2">

        <div className="mt-7 flex flex-col px-5">

          <div className="flex items-start justify-between gap-5 self-start">

            <Image
              alt=''
              width={1}
              height={1}
              loading="lazy"
              src="http://localhost:3000/images/combined-shape.svg"
              className="aspect-[0.5] w-[5px] max-w-full shrink-0 overflow-hidden stroke-violet-500 stroke-[2px] object-contain object-center"
            />
            <div className="text-base grow whitespace-nowrap font-bold leading-4 tracking-tight text-white">
              Go back
            </div>

          </div>

          <div className="text-2xl mt-9 self-stretch whitespace-nowrap font-bold leading-8 tracking-tight text-slate-500">
            <span className="text-white">Edit </span>
            <span className="text-slate-500">#</span>
            <span className="text-white">XM9141</span>
          </div>

          <div className="text-base mt-8 self-stretch whitespace-nowrap font-bold leading-4 tracking-tight text-violet-500">
            Bill From
          </div>

          <div className="text-sm mt-8 self-stretch whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
            Street Address
          </div>

          <input placeholder='19 Union Terrace' className="text-base mt-3.5 outline-none items-start justify-center self-stretch rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          </input>
  
        </div>

        <div className="flex h-28 w-[9px] shrink-0 flex-col self-start rounded bg-slate-800" />
        </div>

      <div className="mt-7 flex w-full flex-col items-stretch px-6">

        <div className="flex items-stretch justify-between gap-5">

          <div className="text-sm whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
            City
          </div>
          <div className="text-sm mr-[5rem] self-start whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
            Post Code
          </div>
        </div>   
        <div className="mt-2.5 flex items-stretch justify-between gap-5">
          <div className="text-base grow items-start justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
            London
          </div>
          <div className="text-base grow items-start justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
            E1 3EZ
          </div>
        </div>
        <div className="text-sm mt-7 whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
          Country
        </div>
        <div className="text-base mt-2.5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          United Kingdom
        </div>
        <div className="text-base mt-11 whitespace-nowrap font-bold leading-4 tracking-tight text-violet-500">
          Bill To
        </div>
        <div className="text-sm mt-8 whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
          Client’s Name
        </div>
        <div className="text-base mt-3.5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          Alex Grim
        </div>
        <div className="text-sm mt-7 whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
          Client’s Email
        </div>
        <div className="text-base mt-3.5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          alexgrim@mail.com
        </div>
        <div className="text-sm mt-7 whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
          Street Address
        </div>
        <div className="text-base mt-3.5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          84 Church Way
        </div>
        <div className="mt-7 flex items-stretch justify-between gap-5">
          <div className="text-sm whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
            City
          </div>
          <div className="text-sm self-start whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
            Post Code
          </div>
        </div>
        <div className="mt-2.5 flex items-stretch justify-between gap-5">
          <div className="text-base grow items-start justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
            Bradford
          </div>
          <div className="text-base grow items-start justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
            BD1 9PB
          </div>
        </div>
        <div className="text-sm mt-7 whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
          Country
        </div>
        <div className="text-base mt-2.5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          United Kingdom
        </div>
        <div className="text-sm mt-11 font-medium leading-4 tracking-normal text-slate-400">
          Invoice Date
        </div>
        <div className="mt-3.5 flex items-start justify-between gap-5 rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 px-5 py-4">
          <div className="text-base font-bold leading-4 tracking-tight text-white">
            21 Aug 2021
          </div>
          <Image
            alt=''
            width={1}
            height={1}
            loading="lazy"
            src="http://localhost:3000/images/combined-shape.svg"
            className="aspect-square w-4 max-w-full shrink-0 self-stretch overflow-hidden fill-slate-400 object-contain object-center"
          />
        </div>
        <div className="text-sm mt-7 font-medium leading-4 tracking-normal text-slate-400">
          Payment Terms
        </div>
        <div className="mt-2.5 flex items-stretch justify-between gap-5 rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-4">
          <div className="text-base font-bold leading-4 tracking-tight text-white">
            Net 30 Days
          </div>
          <Image
            alt=''
            width={1}
            height={1}
            loading="lazy"
            src="http://localhost:3000/images/combined-shape.svg"
            className="aspect-[1.43] w-2.5 max-w-full shrink-0 self-start overflow-hidden stroke-violet-500 stroke-[2px] object-contain object-center"
          />
        </div>
        <div className="text-sm mt-7 whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
          Project / Description
        </div>
        <div className="text-base mt-2.5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          Graphic Design
        </div>
        <div className="text-lg mt-20 whitespace-nowrap font-bold leading-8 tracking-tight text-slate-500">
          Item List
        </div>
        <div className="text-sm mt-9 font-medium leading-4 tracking-normal text-slate-400">
          Item Name
        </div>
        <div className="text-base mt-5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          Banner Design
        </div>
        <div className="mt-7 flex w-full items-stretch justify-between gap-5">
          <div className="flex items-stretch justify-between gap-5">
            <div className="text-sm whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
              Qty.
            </div>
            <div className="text-sm self-start whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
              Price
            </div>
          </div>
          <div className="text-sm self-start font-medium leading-4 tracking-normal text-slate-400">
            Total
          </div>
        </div>
        <div className="mt-2.5 flex items-stretch justify-between gap-4">
          <div className="text-base aspect-[1.3333333333333333] items-stretch justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-10 font-bold leading-4 tracking-tight text-white">
            1
          </div>
          <div className="text-base grow items-stretch justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-10 font-bold leading-4 tracking-tight text-white">
            156.00
          </div>
          <div className="text-base my-auto self-center font-bold leading-4 tracking-tight text-slate-400">
            156.00
          </div>
          <Image
            alt=''
            width={1}
            height={1}
            loading="lazy"
            src="http://localhost:3000/images/combined-shape.svg"
            className="my-auto aspect-[0.75] w-3 max-w-full shrink-0 self-center overflow-hidden fill-slate-400 object-contain object-center"
          />
        </div>
        <div className="text-sm mt-12 font-medium leading-4 tracking-normal text-slate-400">
          Item Name
        </div>
        <div className="text-base mt-5 items-start justify-center rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-16 font-bold leading-4 tracking-tight text-white">
          Email Design
        </div>
        <div className="mt-7 flex w-full items-stretch justify-between gap-5">
          <div className="flex items-stretch justify-between gap-5">
            <div className="text-sm whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
              Qty.
            </div>
            <div className="text-sm self-start whitespace-nowrap font-medium leading-4 tracking-normal text-slate-400">
              Price
            </div>
          </div>
          <div className="text-sm self-start font-medium leading-4 tracking-normal text-slate-400">
            Total
          </div>
        </div>
        <div className="mt-2.5 flex items-stretch justify-between gap-4">
          <div className="text-base aspect-[1.3333333333333333] items-stretch justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-9 font-bold leading-4 tracking-tight text-white">
            2
          </div>
          <div className="text-base grow items-stretch justify-center whitespace-nowrap rounded border border-solid border-[color:var(--04,#252945)] bg-slate-800 py-5 pl-5 pr-8 font-bold leading-4 tracking-tight text-white">
            200.00
          </div>
          <div className="text-base my-auto self-center font-bold leading-4 tracking-tight text-slate-400">
            400.00
          </div>
          <Image
            alt=''
            width={1}
            height={1}
            loading="lazy"
            src="http://localhost:3000/images/combined-shape.svg"
            className="my-auto aspect-[0.75] w-3 max-w-full shrink-0 self-center overflow-hidden fill-slate-400 object-contain object-center"
          />
        </div>
        <div className="text-base mt-12 items-center justify-center whitespace-nowrap rounded-3xl bg-slate-800 px-16 py-5 text-center font-bold leading-4 tracking-tight text-slate-400">
          + Add New Item
        </div>
      </div>

      <div className="mt-6 flex min-h-[64px] w-full flex-col" />

      <div className="flex items-stretch justify-between gap-2 bg-slate-800 py-6 pl-20 pr-6 shadow-sm">
        <div className="text-base grow items-stretch justify-center whitespace-nowrap rounded-3xl bg-slate-800 px-7 py-5 text-center font-bold leading-4 tracking-tight text-indigo-100">
          Cancel
        </div>

        <div className="text-base grow items-stretch justify-center whitespace-nowrap rounded-3xl bg-violet-500 px-6 py-5 font-bold leading-4 tracking-tight text-white">
          Save Changes
        </div>
        
      </div>

    </div>
  )
}

export default EditInvoice
