'use client'
import { useRouter } from 'next/router';
import React from 'react';
import BackButton from '@/components/back_button/back_button';
import { useState, useEffect } from 'react';
import axios from 'axios';

type InvoiceType = {
  id: number;
  rNo: string;
  title: string;
  invoiceDate: string;
  dueDate: string;
  recipientName: string;
  recipientAddress: string;
  email: string;
  price: string;
  name: string;
  status: string;
  address: string;
  breakdown: {
    item: string;
    price: number;
    itemCount: string;
  }[];
};

type InvoiceDataType = {
  length: number;
  inv: InvoiceType[];
};

const getInvoice = async (): Promise<InvoiceDataType[]> => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const InvoiceDetails: React.FC = () => {
  const router = useRouter();
  const [invoicesData, setInvoicesData] = useState<InvoiceType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInvoice();
        const [{ inv, length }] = data;
        setInvoicesData(inv);
        const { idNo : number } = router.query;
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [router.query]);
  
  // const invoice = invoicesData.find((i) => i.id === id_no);

  const address = (x: string) => {
    const arr = x.split(',');
    return (
      <div>
        {arr.map((para, index) => (
          <p key={index} className='text-color2 text-[.8rem] pt-[.3rem]'>
            {para}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full w-full bg-color1">
      <BackButton />

      <div className='mt-[1.9rem] rounded-[0.5rem] mx-[1.5rem] h-[5.6rem] bg-color3 text-white'>
        <div className='p-[1.5rem] flex justify-between items-center'>
          <div>Status</div>
          <div className={`${'bg-darkorange'} bg-opacity-[0.05] flex rounded-[.375rem]`}>
            <div className='flex items-center justify-center w-[6.2rem] h-[2.5rem] px-[1rem] py-[.8rem]'>
              <div className='flex items-center pr-[.5rem]'>
                <div className={`${'bg-darkorange'} w-[.5rem] h-[.5rem] rounded-[50%]`}></div>
              </div>
              <div className={`${'text-darkorange'} font-bold`}>{'paid'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-[1.9rem] rounded-[0.5rem] mx-[1.5rem] bg-color3 text-white'>
        <div className='p-[1.5rem]'>
          <div className='flex'>
            <div className='flex flex-col w-[50%]'>
              <div className='pb-[1.88rem]'>
                <div className='flex'>
                  <p className='text-steelblue'>#</p>
                  <p>XM9141</p>
                </div>
                <p className='text-color2 pt-[.25rem]'>Graphic Design</p>
              </div>
              <div>{address("19 Union Terrace,London,E1 3EZ,United Kingdom")}</div>
              <div className='mt-[1.9rem]'>
                <p className='text-[.8rem]'>Invoice Date</p>
                <p className='font-bold text-[.9rem] mt-[.8rem]'>21 August 2021</p>
              </div>
              <div className='mt-[1.9rem]'>
                <p className='text-[.8rem]'>Payment Du</p>
                <p className='font-bold text-[.9rem] mt-[.8rem]'>20 Sept 2021</p>
              </div>
              <div className='mt-[2.2rem]'>
                <p className='text-[.8rem]'>Sent to</p>
                <p className='font-bold text-[.9rem] mt-[.8rem]'>alexgrim@mail.com</p>
              </div>
            </div>
            <div className='flex items-center mt-[6rem]'>
              <div>
                <p className='text-[.8rem]'>Bill to</p>
                <p className='font-bold text-[.9rem] mt-[.8rem]'>Alex Grim</p>
                <div className='mt-[.44rem]'>{address('84 Church Way,Bradford,BD1 9PB, United Kingdom')}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-[1.9rem] rounded-[0.5rem] h-[14rem] bg-verydarkblue text-white">
              <div className='px-[1.56rem] h-[9rem] rounded-t-[0.5rem] bg-darkblue'>
                <div className='flex pl-[1.5rem] pt-[2rem] pb-[1.5rem] justify-between'>
                  <div className='flex flex-col'>
                    <p className='font-bold text-[.94rem]'>Banner Design</p>
                    <p className='text-dimblue font-bold text-[.94rem] pt-[.5rem]'>1 x $156.00</p>
                  </div>
                  <div className='flex font-bold items-center text-[.94rem]'>
                    <p>$156.00</p>
                  </div>
                </div>
                <div className='flex pl-[1.5rem] justify-between'>
                  <div>
                    <p className=' font-bold text-[.94rem]'>Banner Design</p>
                    <p className='text-dimblue font-bold text-[.94rem] pt-[.5rem]'>1 x $156.00</p>
                  </div>
                  <div className='flex font-bold items-center text-[.94rem]'>
                    <p>$156.00</p>
                  </div>
                </div>
              </div>
              <div className='h-[5rem] flex items-center justify-between'>
                <div className='pl-[1.5rem] text-[.8rem] flex items-center justify-between'><p>Amount Due</p></div>
                <div className='pr-[1.5rem] font-bold text-[1.3rem] flex items-center justify-between'><p>£ 556.00</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[5rem] bg-color3'>
        <div className='flex justify-between px-[1.5rem] pt-[1rem]'>
          <button className='w-[4.5rem] text-[0.94rem] border-none h-[3rem] font-bold bg-darkblue rounded-[1.5rem] text-color2'>Edit</button>
          <button className='w-[5.5rem] text-[0.94rem] border-none h-[3rem] font-bold bg-rose rounded-[1.5rem] text-white'>Delete</button>
          <button className='w-[9.3rem] text-[0.94rem] border-none h-[3rem] font-bold bg-color4 rounded-[1.5rem] text-white'>Mark as Paid</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
