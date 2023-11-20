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
  const [invoicesData, setInvoicesData] = useState<InvoiceDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInvoice();
        setInvoicesData(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const [{inv, length}] = invoicesData;
  return (
    <div className="h-full w-full bg-color1 pb-[6rem]">
      <FilterBar />
      {isLoading ? (
        // Loader component or message while loading
        <div>Loading...</div>
      ) : (
          <React.Fragment>
            {inv.map((i) => (
              <InvoiceComponent
                classN="mb-[1rem]"
                key={i.id}
                rNo={i.rNo}
                date={i.date}
                price={i.price}
                name={i.name}
                status={i.status}
              />
            ))}
          </React.Fragment>
      )}
    </div>
  );
};

export default InvoicesPage;
