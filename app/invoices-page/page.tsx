'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterBar from '@/components/filter_bar/filter_bar';
import InvoiceComponent from '@/components/invoice_component/invoice_component';

interface InvoiceType {
  id: number;
  rNo: string;
  date: string;
  price: string;
  name: string;
  status: string;
}

interface InvoiceDataType {
  length: number;
  inv: InvoiceType[];
}

const getInvoice = async (): Promise<InvoiceDataType[]> => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const InvoicesPage: React.FC = () => {
  const [invoicesData, setInvoicesData] = useState<InvoiceType[]>([]);
  const [length, setLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInvoice();
        const [{ inv, length }] = data;
        setInvoicesData(inv);
        setLength(length);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full w-full bg-color1 pb-[6rem]">
      <FilterBar />
      {isLoading ? (
        // Loader component or message while loading
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          {length === 0 ? (
            <div className='flex flex-col items-center justify-center px-[5rem] pt-[7.5rem] text-white'>
              <img src="http://localhost:3000/images/illustration-empty.svg" alt="illustration empty" />
              <h2 className='mt-[2.6rem] font-extrabold text-[1.2rem]'>There is nothing here</h2>
              <div className='flex flex-col items-center mt-[1.44rem] w-[100%] px-[.5rem]'>
                <p className='text-[.8rem] w-[auto]'>Create an invoice by clicking the</p>
                <p className='mt-[.5rem] text-[.8rem] w-[auto]'>New button and get started</p>
              </div>
            </div>
          ) : (
            <React.Fragment>
              {invoicesData.map((invoice) => (
                <InvoiceComponent
                  classN="mb-[1rem]"
                  key={invoice.id}
                  rNo={invoice.rNo}
                  date={invoice.date}
                  price={invoice.price}
                  name={invoice.name}
                  status={invoice.status}
                />
              ))}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default InvoicesPage;
