'use client'
import FilterBar from "@/components/filter_bar/filter_bar"
import InvoiceComponent from "@/components/invoice_component/invoice_component"
import axios from "axios"

const getInvoice = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data
  }
  catch (error) {
    console.error(error);
  }
}

interface Invoice {
  id: number;
  rNo: string;
  date: string;
  price: string;
  name: string;
  status: string;
}

interface InvoiceData {
  length: number;
  inv: Invoice[];
}

const InvoicesPage: React.FC = async () => {
  const data: InvoiceData[] = await getInvoice();
  const [{inv, length}] = data;

  return (
    <div className="h-[100%] w-[100%] bg-color1 pb-[6rem]">
      <FilterBar />
      {
        inv.map(invoice => {
          const props = {
            rNo: invoice.rNo,
            data: invoice.date,
            price: invoice.price,
            name: invoice.name,
            status: invoice.status
          }
          return (
            <InvoiceComponent classN="mb-[1rem]" key={invoice.id} {...props} />
          )
        })
      }
    </div>
  )
}

export default InvoicesPage
